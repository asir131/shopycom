import  { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/LoginContext'
const AddProduct = () => {
  const {  all_products} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setimage] = useState('');
  const [preview, setPreview] = useState('');
  const [new_price, setNew_price] = useState('');
  const [old_price, setOld_price] = useState('');
  const navigate = useNavigate();
  
  let id =Math.floor((Math.random() * 10000) + 1) ;
  
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
   

   const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      
      const data = new FormData();
      data.append("image",image);

      // Assuming 'data' is a FormData object containing the image and other required fields
      const uploadResponse = await fetch("https://api.imgbb.com/1/upload?key=5c52d4dfa26aee04fd7e454fd2446e6c", {
        method: "POST",
        body: data
      });

      const uploadResult = await uploadResponse.json();
      if (!uploadResponse.ok) {
        throw new Error('Image upload failed');
      }
   
      // Ensure these variables are defined and populated appropriately
      let quantity=1;
      const API_URL = 'http://localhost:8080'; // Update this with your backend URL
      const bodyData = {
        id,
        name,
        category,
        image: uploadResult.data.display_url,
        new_price,
        old_price,
        quantity
      };
     console.log(JSON.stringify(bodyData));
      const productResponse = await fetch(`${API_URL}/addProduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
     console.log(productResponse.ok);
      if (!productResponse.ok) {
        throw new Error('Product upload failed');
      }

      const productData = await productResponse.json();
      console.log(productData);

      alert(productData.message || productData.error);
      if (productData.message === 'Upload Successful') {
        navigate('/'); // Ensure `navigate` is defined in your context
      }
    } catch (error) {
      console.error('Error Upload:', error);
      alert(error.message || 'An error occurred');
    }
};

  

  

  return (
    <div className="text-black mt-20 text-center justify-items-center ">
      <h1 className="font-bold">Add Products</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 justify-items-center mt-10 h-100">
        <input
          className="border-2 h-16 rounded-md px-6"
          type="text"
          placeholder="Name"
          // name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          className="border-2 h-16 rounded-md px-6"
          type="number"
          placeholder="New Price"
          // name='new_price'
          value={new_price}
          onChange={(e) => setNew_price(e.target.value)}
        />
        <input
          className="border-2 h-16 rounded-md px-6"
          type="number"
          placeholder="Old Price"
          // name='old_price'
          value={old_price}
          onChange={(e) => setOld_price(e.target.value)}
        />
        <select
              className="border-2 h-16 w-72  rounded-md px-6"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kids</option>
        </select>
        <input
          className="border-2 h-16 rounded-md px-6 pt-4"
          type="file"
          accept="image/*"
          name="image"
          onChange={(e) => setimage(e.target.files[0])}
        />
        {preview && (
          <img src={preview} alt="Preview" className="h-32 mt-4" />
        )}
        <button
          type="submit"
          className="bg-slate-900 rounded-md px-4 py-2 text-white font-bold mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
  
};

export default AddProduct;




