const Navbar = () => {
  return `
    <nav style="
      background: #3498db; 
      color: white; 
      padding: 15px 20px; 
      text-align: center; 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    ">
      <h2 style="margin: 0; font-size: 24px;">Electron App</h2>

      <div style="display: flex; gap: 10px;">
        <button 
          style="
            padding: 10px 20px; 
            background: #2ecc71; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
            transition: 0.3s;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          " 
          onmouseover="this.style.background='#27ae60'" 
          onmouseout="this.style.background='#2ecc71'"
          onclick="alert('Home Clicked!')"
        >
          Home
        </button>

        <button 
          style="
            padding: 10px 20px; 
            background: #e74c3c; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
            transition: 0.3s;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          " 
          onmouseover="this.style.background='#c0392b'" 
          onmouseout="this.style.background='#e74c3c'"
          onclick="alert('About Clicked!')"
        >
          About
        </button>

        <button 
          style="
            padding: 10px 20px; 
            background: #f39c12; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
            transition: 0.3s;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          " 
          onmouseover="this.style.background='#d35400'" 
          onmouseout="this.style.background='#f39c12'"
          onclick="alert('Contact Clicked!')"
        >
          Contact
        </button>
      </div>
    </nav>
  `;
};

module.exports = Navbar;
