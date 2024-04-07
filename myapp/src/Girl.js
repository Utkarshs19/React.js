import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    Name: '',
    'Birth Date': '',
    'Birth Time': '',
    'Birth Place': ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      Name: '',
      'Birth Date': '',
      'Birth Time': '',
      'Birth Place': ''
    });
  };

  return (
    <div>
      <h2>Girl's Detail</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Birth Date:
          <input
            type="text"
            name="Birth Date"
            value={formData['Birth Date']}
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
          />
        </label>
        <br />
        <label>
          Birth Time:
          <input
            type="text"
            name="Birth Time"
            value={formData['Birth Time']}
            onChange={handleChange}
            placeholder="hh:mm (24 hours)"
          />
        </label>
        <br />
        <label>
          Birth Place:
          <input
            type="text"
            name="Birth Place"
            value={formData['Birth Place']}
            onChange={handleChange}
            placeholder="Enter birth city name"
          />
        </label>
        <br />
       
      </form>
    </div>
  );
}

export default MyForm;
