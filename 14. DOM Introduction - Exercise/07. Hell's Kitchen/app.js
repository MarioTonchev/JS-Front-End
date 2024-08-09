function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);   
      const bestRestaurantsOutput = document.querySelector('#outputs #bestRestaurant p');
      const bestRestaurantWorkersOutput = document.querySelector('#outputs #workers p');

      let restaurants = {};
      let averageSalaries = {};
      let bestRestaurant = '';
      let bestAverageSalary = 0;

      for (const restaurant of input) {
         let currentAverageSalary = 0;
         let [restaurantName, workersInfo] = restaurant.split(' - '); 

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
         }
         
         for (const worker of workersInfo.split(', ')) {
            let [workerName, workerSalary] = worker.split(' ');

            let workerToAdd = {
               workerName,
               workerSalary : Number(workerSalary)
            };

            restaurants[restaurantName].push(workerToAdd);
         }
         debugger;
         currentAverageSalary = restaurants[restaurantName].reduce((acc, w) => {
            acc += w.workerSalary
            return acc;
         }, 0) / restaurants[restaurantName].length;
         
         averageSalaries[restaurantName] = currentAverageSalary;

         if (currentAverageSalary > bestAverageSalary) {
            bestAverageSalary = currentAverageSalary;
            bestRestaurant = restaurantName;
         }
      }

      let bestSalary = restaurants[bestRestaurant].reduce((acc, worker) => {                 
         if (worker.workerSalary > acc) {
            acc = worker.workerSalary;
         }
        
         return acc;
      }, 0);

      bestRestaurantsOutput.textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalaries[bestRestaurant].toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      bestRestaurantWorkersOutput.textContent = restaurants[bestRestaurant].sort((a, b) => b.workerSalary - a.workerSalary).map(w => `Name: ${w.workerName} With Salary: ${w.workerSalary}`).join(' ');
   }
}