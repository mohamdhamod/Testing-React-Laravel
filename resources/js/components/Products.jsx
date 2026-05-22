import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Loading, Error } from "./Loading";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";

const Products = ({ products, loading, error }) => {
  const [data, setData] = useState(products);
  const [sortMenuVisible, setSortMenuVisible] = useState(false);
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const sortMenuRef = useRef(null);
  const filterMenuRef = useRef(null);

  useEffect(() => {
    setData(products);
  }, [products]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(event.target) &&
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setSortMenuVisible(false);
        setFilterMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="xs:w-[95vw] md:max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center pt-6">
        <SortMenu
          products={Array.isArray(data) ? data : []}
          setData={setData}
          isVisible={sortMenuVisible}
          setVisibility={setSortMenuVisible}
          ref={sortMenuRef}
        />
        <FilterMenu
          setData={setData}
          isVisible={filterMenuVisible}
          setVisibility={setFilterMenuVisible}
          ref={filterMenuRef}
        />
      </div>

      <div
        className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xs:gap-3 sm:gap-4
                 md:mx-4 my-4 items-stretch"
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : Array.isArray(data) && data.length > 0 ? (
          data
            .slice(0, 30)
            .map((elem) => (
              <ProductCard product={elem} key={elem._id || elem.id} />
            ))
        ) : (
          <p>No products Available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
