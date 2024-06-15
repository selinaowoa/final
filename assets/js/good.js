document.addEventListener("DOMContentLoaded", function () {
  // 獲取商品ID
  const productId = window.location.hash.substring(1);
  // ID對應
  const product = getProductById(productId);
  // 對應到顯示詳細資訊
  if (product) {
    displayProductDetails(product);
  } else {
    // 如果找不到商品，顯示提示
    const productDetailsContainer = document.getElementById("productDetails");
    productDetailsContainer.innerHTML = "<p>找不到商品資料</p>";
  }
});

// product detail
function getProductById(productId) {
  const products = [
    {
      id: "cookies1",
      name: "海苔鬆餅",
      price: "$40",
      image: "../assets/image/cookies1.jpg",
      description: "口感蓬鬆、表皮略帶點酥脆，並呈現淡淡的海苔清香，口感豐富，風味極佳",
      inventory: 50,
    },
    {
      id: "cookies2",
      name: "小飛機餅乾",
      price: "$35",
      image: "../assets/image/cookies2.jpg",
      description: "從小吃到大的傳統餅乾,鬆脆的口感,是簡單卻讓我們一直懷念的滋味~",
      inventory: 50,
    },
    {
      id: "cookies3",
      name: "小花餅乾",
      price: "$45",
      image: "../assets/image/cookies3.jpg",
      description: "餅乾上有著一顆甜甜糖花的可愛造型，不管是大人或小朋友都難以抗拒",
      inventory: 50,
    },
    {
      id: "cookies4",
      name: "黑糖祈福餅",
      price: "$30",
      image: "../assets/image/cookies4.jpg",
      description: "小小的剛好一口，酥脆度恰到好處，黑糖風味更增添了層次感",
      inventory: 50,
    },
    // 糖果...
    {
      id: "candy1",
      name: "三色軟糖",
      price: "$3",
      image: "../assets/image/candy1.jpg",
      description: "有紅白綠組成的三色軟糖。使用洋菜製作的軟糖，素食可食。",
      inventory: 50,
    },
    {
      id: "candy2",
      name: "口笛糖",
      price: "$5",
      image: "../assets/image/candy2.jpg",
      description: "可愛又有趣的口笛糖大人小孩都喜歡是童年回憶的糖果。",
      inventory: 50,
    },
    {
      id: "candy3",
      name: "手工芝麻糖",
      price: "$7",
      image: "../assets/image/candy3.jpg",
      description: "嚴選高品質飽滿芝麻，緊緊包覆著香醇不黏牙的麥芽糖，加入特選花生，芝麻香包覆著花生香。",
      inventory: 50,
    },
    {
      id: "candy4",
      name: "沙士糖",
      price: "$3",
      image: "../assets/image/candy4.jpg",
      description: "沙士糖和可樂糖是萬年不敗款，無論大人小孩都很愛，若要排名台灣特色糖果，它們一定榜上有名！",
      inventory: 50,
    },
    // 飲料...
    {
      id: "drink1",
      name: "津津蘆筍汁245ml",
      price: "$10",
      image: "../assets/image/drinks1.jpg",
      description: "津津蘆筍汁,採用優質蘆筍製成，清涼退火，生津止渴，讓人再三回味還是津津有味。",
      inventory: 50,
    },
    {
      id: "drink2",
      name: "彈珠汽水250ml",
      price: "$30",
      image: "../assets/image/drinks2.jpg",
      description:
        "彈珠汽水（又稱波子汽水，ラムネ）是在日本極受歡迎的碳酸飲料，特殊的包裝方式：用一顆玻璃珠封口，瓶頸兩側凹入，要喝時將彈珠壓入，使之掉落在瓶頸處即可飲用!",
      inventory: 50,
    },
    {
      id: "drink3",
      name: "泰山仙草蜜",
      price: "$17",
      image: "../assets/image/drinks3.jpg",
      description:
        "台灣在地30年的傳統飲品泰山仙草蜜，老品牌信譽佳，使用嚴選天然仙草，職人古法熬煮技術，以純正原料實在的仙草顆粒口感，搭配香醇蜂蜜，打造出傳統的清爽口感，完整保留台灣經典風味。",
      inventory: 50,
    },
    {
      id: "drink4",
      name: "冰淇淋汽水",
      price: "$15",
      image: "../assets/image/drinks4.jpg",
      description:
        "歡樂時刻總少不了清涼的碳酸飲料，有著如香草冰淇淋般香味的冰淇淋汽水，在歡樂派對時不用準備冰淇淋及碳酸飲料做冰淇淋蘇打，只要打開冰淇淋汽水即能即時享受相同的風味。",
      inventory: 50,
    },
  ];

  return products.find((product) => product.id === productId);
}

// 顯示商品詳細資訊
function displayProductDetails(product) {
  const productDetailsContainer = document.getElementById("productDetails");
  productDetailsContainer.innerHTML = `
    <div class="product-details">
            <img src="${product.image}" alt="${product.name}" width="200">
            <h2>${product.name}</h2>
            <p class="price">${product.price}</p>
            <p>${product.description}</p>
            <p id="inventoryDisplay">庫存數量：${product.inventory}</p>
            <label for="quantity">選擇數量：</label>
            <input type="number" id="quantity" name="quantity" min="1" max="${product.inventory}" value="1">
            <button onclick="addToCart()">加入購物車</button>
        </div>
    `;
}

// 加入購物車函式
function addToCart() {
  const product = getProductById(window.location.hash.substring(1));
  const quantityInput = document.getElementById("quantity");
  const quantity = parseInt(quantityInput.value); // 獲取選擇的購買數量，並轉換為整數

  if (quantity > 0 && product.inventory >= quantity) {
    product.inventory -= quantity;
    const inventoryDisplay = document.getElementById("inventoryDisplay");
    inventoryDisplay.textContent = `庫存數量：${product.inventory}`;
    alert("已成功加入購物車！");
  } else {
    alert("庫存不足或購買數量不合法，無法加入購物車！");
  }
}

//star
function showConfirmation() {
  alert("已送出評論！");
}

//評論
function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}

function renderStars(ratingElement, stars) {
  ratingElement.innerHTML = "";
  for (let i = 0; i < stars; i++) {
    const starSpan = document.createElement("span");
    starSpan.classList.add("star");
    starSpan.innerHTML = "&#9733;";
    ratingElement.appendChild(starSpan);
  }
}

function getRandomReviewContent(rating) {
  const reviews = {
    1: ["這個商品太差了，我不喜歡。", "非常失望，不推薦。"],
    2: ["品質不佳，可以更好。", "有點失望，可能不會再買。"],
    3: ["還行，不過有待改進。", "中等品質，尚可接受。"],
    4: ["這個商品不錯，我很滿意。", "相當好，很值得購買。"],
    5: ["這個商品非常棒！我非常喜歡。", "我要全部買下來。"],
  };
  const possibleReviews = reviews[rating];
  return possibleReviews[Math.floor(Math.random() * possibleReviews.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".review");

  reviews.forEach((review) => {
    const ratingElement = review.querySelector(".rating");
    const reviewContentElement = review.querySelector(".review-content");
    const randomRating = getRandomRating();
    renderStars(ratingElement, randomRating);
    reviewContentElement.textContent = getRandomReviewContent(randomRating);
  });
});
