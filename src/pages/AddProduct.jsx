import  { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/LoginContext'
const AddProduct = () => {
  const {  all_products } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [new_price, setNew_price] = useState('');
  const [old_price, setOld_price] = useState('');
  const navigate = useNavigate();
  let id = all_products.length+1;
  console.log(id);
  useEffect(() => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setPreview(null);
    }
  }, [selectedImage]);
   const API_URL = 'http://localhost:8080'; // Update this with your backend URL

const handleSubmit = async (event) => {
  event.preventDefault();
  

  try {
    const bodyData = {
        name,
        category,
        selectedImage,
        new_price,
        old_price
    };
    
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( bodyData ),
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }
   
    const data = await response.json();
    
    alert(data.message || data.error);
    if(data.message =='Sign up successful') {
      navigate('/login');
    } // Display success or error message
  } catch (error) {
    console.error('Error signing up:', error);
    alert(error);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 h-16 rounded-md px-6"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="border-2 h-16 rounded-md px-6"
          type="number"
          placeholder="New Price"
          value={new_price}
          onChange={(e) => setNew_price(e.target.value)}
        />
        <input
          className="border-2 h-16 rounded-md px-6"
          type="number"
          placeholder="Old Price"
          value={old_price}
          onChange={(e) => setOld_price(e.target.value)}
        />
        <input
          className="border-2 h-16 rounded-md px-6 pt-4"
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedImage(e.target.files[0])}
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




