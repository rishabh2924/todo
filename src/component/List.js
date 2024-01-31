import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, removeItem, editItem }) => {
  return (
    
    <div className='grocery-list'>
      {items.map((item,index) => {
        const { id, title } = item;
        return (
          <Draggable draggableId={id}
          index={index}
          key={id}
        >
          {(provided) => (
            
          <article className='grocery-item' {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef} key={id}>
            <input type='checkbox'></input>
            <p className='title-list'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>)}
          </Draggable>
        );
      })}
    </div>
  );
};

export default List;