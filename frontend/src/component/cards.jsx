import React from 'react';

function Cards({ item }) {
  console.log(item);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={item.image} // Assuming item has an imageUrl property
            alt={item.title} // Dynamic alt text
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            {item.isNew && <div className="badge badge-secondary">NEW</div>} {/* Conditional badge */}
          </h2>
          <p>{item.description || 'No description available.'}</p> {/* Fallback for description */}
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.category || 'Category'}</div> {/* Dynamic category */}
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
