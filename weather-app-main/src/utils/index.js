const data = [
    {"id": "1", "name": "State 1", "population": 1000000, "cities": [
      {"city": "Mumbai", "temp": 30, "population": 200000, "aqi": 50},
      {"city": "Delhi", "temp": 28, "population": 180000, "aqi": 60},
      {"city": "Bangalore", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Chennai", "temp": 29, "population": 210000, "aqi": 45},
      {"city": "Kolkata", "temp": 31, "population": 220000, "aqi": 55},
      {"city": "Hyderabad", "temp": 27, "population": 150000, "aqi": 65}
    ]},
    {"id": "2", "name": "State 2", "population": 1500000, "cities": [
      {"city": "Ahmedabad", "temp": 35, "population": 300000, "aqi": 45},
      {"city": "Pune", "temp": 29, "population": 180000, "aqi": 55},
      {"city": "Surat", "temp": 33, "population": 250000, "aqi": 50},
      {"city": "Jaipur", "temp": 28, "population": 200000, "aqi": 40},
      {"city": "Lucknow", "temp": 32, "population": 210000, "aqi": 60},
      {"city": "Kanpur", "temp": 30, "population": 160000, "aqi": 65}
    ]},
    {"id": "3", "name": "State 3", "population": 800000, "cities": [
      {"city": "Bhopal", "temp": 29, "population": 150000, "aqi": 55},
      {"city": "Indore", "temp": 31, "population": 170000, "aqi": 60},
      {"city": "Nagpur", "temp": 28, "population": 190000, "aqi": 50},
      {"city": "Thane", "temp": 32, "population": 200000, "aqi": 40},
      {"city": "Nashik", "temp": 30, "population": 160000, "aqi": 45},
      {"city": "Aurangabad", "temp": 27, "population": 140000, "aqi": 70}
    ]},
    {"id": "4", "name": "State 4", "population": 1200000, "cities": [
      {"city": "Patna", "temp": 28, "population": 180000, "aqi": 60},
      {"city": "Ranchi", "temp": 32, "population": 200000, "aqi": 50},
      {"city": "Bhubaneswar", "temp": 29, "population": 170000, "aqi": 55},
      {"city": "Cuttack", "temp": 31, "population": 160000, "aqi": 65},
      {"city": "Jamshedpur", "temp": 30, "population": 150000, "aqi": 70},
      {"city": "Dhanbad", "temp": 27, "population": 140000, "aqi": 75}
    ]},
    {"id": "5", "name": "State 5", "population": 2000000, "cities": [
      {"city": "Amritsar", "temp": 30, "population": 200000, "aqi": 50},
      {"city": "Ludhiana", "temp": 28, "population": 180000, "aqi": 60},
      {"city": "Jalandhar", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Patiala", "temp": 29, "population": 210000, "aqi": 45},
      {"city": "Bathinda", "temp": 31, "population": 220000, "aqi": 55},
      {"city": "Chandigarh", "temp": 27, "population": 150000, "aqi": 65}
    ]},
    {"id": "6", "name": "State 6", "population": 500000, "cities": [
      {"city": "Raipur", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Bilaspur", "temp": 29, "population": 180000, "aqi": 55},
      {"city": "Jagdalpur", "temp": 33, "population": 230000, "aqi": 35},
      {"city": "Ambikapur", "temp": 28, "population": 190000, "aqi": 70},
      {"city": "Durg", "temp": 34, "population": 120000, "aqi": 40},
      {"city": "Korba", "temp": 29, "population": 160000, "aqi": 45}
    ]},
    {"id": "7", "name": "State 7", "population": 1800000, "cities": [
      {"city": "Kota", "temp": 28, "population": 190000, "aqi": 70},
      {"city": "Ajmer", "temp": 30, "population": 220000, "aqi": 55},
      {"city": "Alwar", "temp": 29, "population": 210000, "aqi": 45},
      {"city": "Bikaner", "temp": 31, "population": 200000, "aqi": 50},
      {"city": "Udaipur", "temp": 27, "population": 150000, "aqi": 65},
      {"city": "Jodhpur", "temp": 32, "population": 250000, "aqi": 40}
    ]},
    {"id": "8", "name": "State 8", "population": 900000, "cities": [
      {"city": "Srinagar", "temp": 29, "population": 170000, "aqi": 55},
      {"city": "Jammu", "temp": 31, "population": 160000, "aqi": 65},
      {"city": "Anantnag", "temp": 32, "population": 200000, "aqi": 50},
      {"city": "Baramulla", "temp": 27, "population": 150000, "aqi": 70},
      {"city": "Kupwara", "temp": 34, "population": 120000, "aqi": 40},
      {"city": "Udhampur", "temp": 28, "population": 180000, "aqi": 60}
    ]},
    {"id": "9", "name": "State 9", "population": 2500000, "cities": [
      {"city": "Shimla", "temp": 27, "population": 150000, "aqi": 65},
      {"city": "Dharamshala", "temp": 30, "population": 200000, "aqi": 50},
      {"city": "Solan", "temp": 29, "population": 170000, "aqi": 55},
      {"city": "Kullu", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Mandi", "temp": 31, "population": 220000, "aqi": 45},
      {"city": "Palampur", "temp": 28, "population": 180000, "aqi": 60}
    ]},
    {"id": "10", "name": "State 10", "population": 600000, "cities": [
      {"city": "Dehradun", "temp": 29, "population": 160000, "aqi": 45},
      {"city": "Haridwar", "temp": 31, "population": 170000, "aqi": 55},
      {"city": "Roorkee", "temp": 30, "population": 150000, "aqi": 65},
      {"city": "Rishikesh", "temp": 32, "population": 200000, "aqi": 50},
      {"city": "Haldwani", "temp": 29, "population": 180000, "aqi": 60},
      {"city": "Kashipur", "temp": 34, "population": 120000, "aqi": 40}
    ]},
    {"id": "11", "name": "State 11", "population": 700000, "cities": [
      {"city": "Gangtok", "temp": 27, "population": 150000, "aqi": 65},
      {"city": "Namchi", "temp": 30, "population": 200000, "aqi": 50},
      {"city": "Mangan", "temp": 29, "population": 170000, "aqi": 55},
      {"city": "Rangpo", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Jorethang", "temp": 31, "population": 220000, "aqi": 45},
      {"city": "Singtam", "temp": 28, "population": 180000, "aqi": 60}
    ]},
    {"id": "12", "name": "State 12", "population": 3000000, "cities": [
      {"city": "Itanagar", "temp": 34, "population": 120000, "aqi": 40},
      {"city": "Naharlagun", "temp": 29, "population": 160000, "aqi": 45},
      {"city": "Pasighat", "temp": 30, "population": 200000, "aqi": 50},
      {"city": "Bomdila", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Tawang", "temp": 27, "population": 150000, "aqi": 65},
      {"city": "Ziro", "temp": 28, "population": 180000, "aqi": 60}
    ]},
    {"id": "13", "name": "State 13", "population": 400000, "cities": [
      {"city": "Dispur", "temp": 29, "population": 170000, "aqi": 55},
      {"city": "Guwahati", "temp": 31, "population": 160000, "aqi": 65},
      {"city": "Tezpur", "temp": 32, "population": 200000, "aqi": 50},
      {"city": "Silchar", "temp": 27, "population": 150000, "aqi": 70},
      {"city": "Jorhat", "temp": 34, "population": 120000, "aqi": 40},
      {"city": "Dibrugarh", "temp": 28, "population": 180000, "aqi": 60}
    ]},
    {"id": "14", "name": "State 14", "population": 1100000, "cities": [
      {"city": "Imphal", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Thoubal", "temp": 29, "population": 180000, "aqi": 55},
      {"city": "Bishnupur", "temp": 33, "population": 230000, "aqi": 35},
      {"city": "Churachandpur", "temp": 28, "population": 190000, "aqi": 70},
      {"city": "Kakching", "temp": 34, "population": 120000, "aqi": 40},
      {"city": "Ukhrul", "temp": 29, "population": 160000, "aqi": 45}
    ]},
    {"id": "15", "name": "State 15", "population": 1500000, "cities": [
      {"city": "Shillong", "temp": 30, "population": 200000, "aqi": 50},
      {"city": "Tura", "temp": 28, "population": 180000, "aqi": 60},
      {"city": "Jowai", "temp": 32, "population": 250000, "aqi": 40},
      {"city": "Nongpoh", "temp": 29, "population": 210000, "aqi": 45},
      {"city": "Mawlai", "temp": 31, "population": 220000, "aqi": 55},
      {"city": "Williamnagar", "temp": 27, "population": 150000, "aqi": 65}
    ]}
  ]

  export default data;
  