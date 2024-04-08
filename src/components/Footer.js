import React from "react";

function Footer({ items }) {
  let itemCount = items.length;
  let completedItems = items.filter((item) => item.isChecked).length;
  return (
    <div className="footer-cont">
      <p>
        You have {itemCount} item in your list, and you already completed{" "}
        {completedItems}.
      </p>
    </div>
  );
}

export default Footer;
