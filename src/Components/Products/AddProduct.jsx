import { createProduct } from "../../Services/productServices";

function AddProduct({ category }) {
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const target = event.target;
    const product = {
      name: target?.name?.value,
      price: target?.price?.value,
      category: target?.category?.value,
      stock: target?.stock?.value,
      description: target?.description?.value,
    };
    const defaultImage = target?.defaultImage.files[0];
    const res = await createProduct(product, defaultImage);
  };
  return (
    <>
      <button
        type="button"
        className=" border-0 cartBtn rounded-1"
        data-bs-toggle="modal"
        data-bs-target="#categoryModal"
      >
        <i className="bx bx-plus fs-2 px-2  "></i>
      </button>
      <div
        className="modal fade"
        id="categoryModal"
        tabindex="-1"
        aria-labelledby="categoryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="categoryModalLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <form
                onSubmit={handleAddProduct}
                className="w-75 d-flex gap-4 flex-column align-items-center justify-content-center"
              >
                <input
                  className="w-100 "
                  type="text"
                  name="name"
                  required
                  placeholder="Product name"
                />
                <input
                  className="w-100 "
                  type="number"
                  name="price"
                  required
                  placeholder="Product price"
                />

                <select name="category" className="w-100 ">
                  <option>Select Category</option>
                  {category &&
                    category?.map((element) => (
                      <option key={element?._id} value={element?._id}>
                        {element?.name}
                      </option>
                    ))}
                </select>
                <input
                  className="w-100 "
                  type="number"
                  name="stock"
                  required
                  placeholder="Quantity"
                />
                <input
                  multiple={false}
                  className="w-100 "
                  type="file"
                  name="defaultImage"
                  required
                  placeholder="Default Image"
                />
                <textarea
                  name="description"
                  className="w-100 "
                  rows="3"
                  placeholder="Description"
                  defaultValue={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo repudiandae odit libero tempora? Modi ullam praesentium eos iusto. Ducimus vitae vel libero pariatur numquam architecto dolor corrupti laboriosam debitis voluptatem."
                  }
                ></textarea>
                <div className="modal-footer w-100">
                  <button
                    type="button"
                    className="btn btn-secondary border-0 px-3 py-2 rounded-1"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="cartBtn bg-tealBlue text-light border-0 px-3 py-2 rounded-1"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
