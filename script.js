
if (document.getElementById("productName")) {
  
  const params = new URLSearchParams(window.location.search);
  
  const code = params.get("code") || "Purse-01";
  const name = params.get("name") || "Leather Purse";
  const price = params.get("price") || "2499";
  
  const img1 = params.get("img1") || "bag1.jpg";
  const img2 = params.get("img2") || "bag1.jpg";
  const img3 = params.get("img3") || "bag1.jpg";
  const img4 = params.get("img4") || "bag1.jpg";
  
  document.getElementById("productName").textContent = name;
  document.getElementById("productPrice").textContent = "₹" + price;
  
  if (document.getElementById("productCode")) {
    document.getElementById("productCode").textContent = code;
  }
  
  document.getElementById("mainImage").src = img1;
  
  document.getElementById("thumb1").src = img1;
  document.getElementById("thumb2").src = img2;
  document.getElementById("thumb3").src = img3;
  document.getElementById("thumb4").src = img4;
  
  const orderBtn = document.getElementById("orderBtn");
  
  if (orderBtn) {
    
    orderBtn.addEventListener("click", () => {
      
      const message =
        `Hello LeatherLux

I want to order this purse.

Purse Code: ${code}

Product Name: ${name}

Price: ₹${price}

Please share availability and delivery details.`;
      
      window.open(
        `https://wa.me/918178423516?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      
    });
    
  }
  
}

function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

function orderProduct(productName, price) {
  
  const message =
    `Hello LeatherLux

I want to order this purse.

Product Name: ${productName}

Price: ${price}`;
  
  window.open(
    `https://wa.me/918178423516?text=${encodeURIComponent(message)}`,
    "_blank"
  );
  
}