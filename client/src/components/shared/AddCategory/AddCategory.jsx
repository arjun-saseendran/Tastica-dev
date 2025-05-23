import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { AdminSideBar } from "../../../components/admin/AdminSideBar/AdminSideBar";
import { useCategories } from "../../../hooks/useCategories";

export const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const { addCategory } = useCategories();

  return (
    <>
      <AdminSideBar />
      <div className="flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-2
                my-10  max-w-[500px] py-10 p-4  md:px-10 bg-tertiary text-primary shadow-2xl rounded-lg"
        >
          <h1 className="text-3xl mb-6 font-thin text-center text-primary ">
            Add Category
          </h1>

          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category"
            className="p-4 my-1  w-full  bg-white shadow-2xl outline-primary"
          />

          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="p-4 my-1 w-full bg-white shadow-2xl outline-primary"
          />

          <input
            type="number"
            value={discountRate}
            onChange={(e) => setDiscountRate(e.target.value)}
            placeholder="Discount Rate"
            className="p-4 my-1 w-full bg-white shadow-2xl outline-primary"
          />

          <button
            className="p-4 my-4  bg-primary hover:opacity-90 w-full text-white rounded-lg"
            onClick={() => {
              addCategory({ categoryName, description, discountRate });
              setCategoryName("");
              setDescription("");
              setDiscountRate("");
            }}
          >
            <span className="flex items-center justify-center gap-2 font-semibold">
              Add Category <BiCategory />
            </span>
          </button>
        </form>
      </div>
    </>
  );
};
