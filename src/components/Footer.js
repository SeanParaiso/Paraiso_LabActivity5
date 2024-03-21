import React from "react";

function Footer({ items }) {
  let itemCount = items.length;
  let completedItems = items.filter((item) => item.isChecked).length;
  let percentage = Math.round((completedItems / itemCount) * 100);
  return (
    <div>
      <p>
        You have {itemCount} item in your list, and you already completed{" "}
        {completedItems}, {percentage}%.
      </p>
    </div>
  );
}

export default Footer;
