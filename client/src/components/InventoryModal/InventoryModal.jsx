// import React from "react";
// import Modal from "react-modal";
// import "./InventoryModal.scss";

// export default class InventoryModal extends React.Component {
//   render() {
//     return (
//       <Modal
//         isOpen={true}
//         className="inventory-modal"
//         overlayClassName="inventory-modal__overlay"
//       >
//         <form className="inventM" onSubmit={this.postWarehouse}>
//           <h1 className="inventM__title">Create New</h1>
//           <div className="inventM__container-big">
//             <div className="inventM__container">
//               <div className="inventM__left">
//                 <div className="inventM__label-input">
//                   <label className="inventM__label" htmlFor="Product">
//                     Product
//                   </label>
//                   <input
//                     className="inventM__input"
//                     type="text"
//                     name="product"
//                     placeholder="Item Name"
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <div className="inventM__label-input">
//                   <label className="inventM__label" htmlFor="city">
//                     City
//                   </label>
//                   <input
//                     className="inventM__input"
//                     type="text"
//                     name="city"
//                     placeholder="City"
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <div className="inventM__label-input">
//                   <label className="inventM__label" htmlFor="quantity">
//                     Quantity
//                   </label>
//                   <input
//                     className="inventM__input"
//                     type="text"
//                     name="quantity"
//                     placeholder="0"
//                     onChange={this.onChange}
//                   />
//                 </div>
//               </div>
//               <div className="inventM__right">
//                 <div className="inventM__label-input">
//                   <label className="inventM__label" htmlFor="lastOrdered">
//                     Last Ordered
//                   </label>
//                   <input
//                     className="inventM__input"
//                     type="text"
//                     name="lastOrdered"
//                     placeholder="yyyy-mm-dd"
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <div className="inventM__label-input">
//                   <label className="inventM__label" htmlFor="position">
//                     Country
//                   </label>
//                   <select
//                     className="inventM__input"
//                     name="location"
//                     onChange={this.onChange}
//                   >
//                     <option value="Toronto, Can">Canada</option>
//                   </select>
//                 </div>
//                 <div className="inventM__label-input">
//                   <label className="inventM__label" htmlFor="email">
//                     Email
//                   </label>
//                   <input
//                     className="inventM__input"
//                     type="text"
//                     name="email"
//                     placeholder="email@instock.com"
//                     onChange={this.onChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="inventM__label-input">
//               <label className="inventM__label" htmlFor="description">
//                 Item Description
//               </label>
//               <input
//                 className="inventM__input"
//                 type="textarea"
//                 name="description"
//                 placeholder="(Optional)"
//                 onChange={this.onChange}
//               />
//             </div>
//           </div>
//           <div className="inventM__label-input"></div>
//           <div className="modal-form__btn-container">
//             <button type="button" className="btn-container__cancel">Submit</button>
//             <button className="btn-container__submit">Cancel</button>
//           </div> 
//         </form>
//       </Modal>
//     );
//   }
// }

// {
//   /* <div className="modal-form__btn-container">
//     <button type="button" className="btn-container__cancel">Submit</button>
//     <button className="btn-container__submit">Cancel</button>
// </div> */
// }

// {
//   /* <div className="modal-form__status">
//     <label className="modal-form__label modal-form__label--status" htmlFor="status">In Stock</label>
//     <Switch onChange={this.handleChange} checked={this.state.checked} handleDiameter={24} uncheckedIcon={false} checkedIcon={false} width={48}/>
// </div> */
// }
