import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
import Rooms from "../pages/Rooms";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  // console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get unique capacity
  let people = getUnique(rooms, "capacity");
  //map to jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {/* <option value="single">single</option> */}
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* select capacity*/}
        <div className="form-group">
          <label htmlFor="capacity">room capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {/* <option value="single">single</option> */}
            {people}
          </select>
        </div>
        {/* end select capacity*/}
      </form>
    </section>
  );
}
