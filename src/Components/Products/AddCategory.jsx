import { createCategory } from "../../Services/productServices";

function AddCategory() {
  const handleAddCategory = async (event) => {
    event.preventDefault();
    const target = event.target;
    const category = {
      name: target?.name?.value,
    };
    const res = await createCategory(category);
  };
  return (
    <>
      <button
        type="button"
        className=" border-0 cartBtn rounded-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bx bx-list-plus fs-2 px-2 "></i>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Category
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
                onSubmit={handleAddCategory}
                className="w-75 d-flex gap-4 flex-column align-items-center justify-content-center"
              >
                <input
                  className="w-100 "
                  type="text"
                  name="name"
                  required
                  placeholder="Category name"
                />

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
                    Add Category
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

export default AddCategory;
