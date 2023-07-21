import React, { useState } from 'react';

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    year: '',
    medium: '',
    nationality: '',
    imageUrl: '',
    artStyle: 'Futurism',
  });

  const artStyles = [
    'Futurism',
    'Cubism',
    'Expressionism',
    'Abstract',
    'Renaissance',
    'Impressionism',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      title: '',
      artist: '',
      year: '',
      medium: '',
      nationality: '',
      imageUrl: '',
      artStyle: 'Futurism',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Artist:
        <input type="text" name="artist" value={formData.artist} onChange={handleChange} />
      </label>
      <br />
      <label>
        Year:
        <input type="text" name="year" value={formData.year} onChange={handleChange} />
      </label>
      <br />
      <label>
        Medium:
        <input type="text" name="medium" value={formData.medium} onChange={handleChange} />
      </label>
      <br />
      <label>
        Nationality:
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      </label>
      <br />
      <label>
        Art Style:
        <select name="artStyle" value={formData.artStyle} onChange={handleChange}>
          {artStyles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;
