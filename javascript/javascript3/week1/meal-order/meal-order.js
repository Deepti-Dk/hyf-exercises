const jsonData = `[{"Order name": "Pasta", "Order id": 101, "Price": 70, "List of drinks": ["lemonade","faxkondi"], "Order extras":["salad","cheese dips","potato wedges"]},{"Order name": "Pasta", "Order id": 101, "Price": 70, "List of drinks": ["lemonade","faxkondi"], "Order extras":["salad","cheese dips","potato wedges"]}]`;
const parseJsonData = JSON.parse(jsonData);
console.log(parseJsonData);
