# MS_GATE

https://www.youtube.com/watch?v=Jo5TVUBjbIs&ab_channel=CodingwithKevin



# DOCKER INSTALL

https://www.youtube.com/watch?v=ZyBBv1JmnWQ&ab_channel=CodeBear




# Visitor Tables : 

```json
{
   "_id": ObjectId("entry_id"),
   "vehicle": {
     "name": "Toyota Camry",
     "color": "Black",
     "model": "2021",
     "numberPlate": "ABC123"
   },
   "drivers": [
     {
       "name": "John Doe",
       "photo": "driver_photo_url",
       "address": "123 Main St, City",
       "phoneNumber": "123-456-7890"
     },
     {
       "name": "Jane Smith",
       "photo": "driver_photo_url",
       "address": "456 Elm St, City",
       "phoneNumber": "987-654-3210"
     }
   ],
   "visitors": [
     {
       "referencePeopleName": ["Jane Doe", "John Smith"],
       "numberOfPassengers": 2,
       "purpose": "Meeting"
     },
     {
       "referencePeopleName": ["Alice Smith", "Bob Johnson"],
       "numberOfPassengers": 1,
       "purpose": "Delivery"
     }
   ],
   "entryTimes": [
     ISODate("entry_time_1"),
     ISODate("entry_time_2")
   ],
   "lastUpdate": ISODate("last_update_time")
}

```

## Count Number Of Vehicle Each Day :
```js
const VehicleEntry = require('./models/vehicleEntry'); // Assuming you have a Mongoose model defined for your vehicle entries

VehicleEntry.aggregate([
  // Unwind the entryTimes array to create a document for each entry time
  { $unwind: "$entryTimes" },
  // Project the date part of the entry time using $dateToString
  {
    $project: {
      date: { $dateToString: { format: "%Y-%m-%d", date: "$entryTimes" } }
    }
  },
  // Group by date and count the number of entries for each date
  {
    $group: {
      _id: "$date",
      count: { $sum: 1 }
    }
  }
])
.exec((err, result) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Vehicle entries count per day:", result);
});
```

## Count Last 7 Days Data :
```js
const VehicleEntry = require('./models/vehicleEntry'); // Assuming you have a Mongoose model defined for your vehicle entries

// Calculate the date 7 days ago
const lastSevenDaysDate = new Date(new Date() - 7 * 24 * 60 * 60 * 1000);

VehicleEntry.aggregate([
  // Unwind the entryTimes array to create a document for each entry time
  { $unwind: "$entryTimes" },
  // Project the date part of the entry time using $dateToString
  {
    $project: {
      date: { $dateToString: { format: "%Y-%m-%d", date: "$entryTimes" } }
    }
  },
  // Filter documents for the last 7 days
  {
    $match: {
      date: { $gte: lastSevenDaysDate }
    }
  },
  // Group by date and count the number of entries for each date
  {
    $group: {
      _id: "$date",
      count: { $sum: 1 }
    }
  },
  // Sort the results by date
  { $sort: { _id: 1 } }
])
.exec((err, result) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Vehicle entries count for the last 7 days:", result);
});
```

## Last Month Vehicle Count
```js
const VehicleEntry = require('./models/vehicleEntry'); // Assuming you have a Mongoose model defined for your vehicle entries

// Calculate the start and end dates of the last month
const currentDate = new Date();
const lastMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
const lastMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

VehicleEntry.aggregate([
  // Unwind the entryTimes array to create a document for each entry time
  { $unwind: "$entryTimes" },
  // Project the date part of the entry time using $dateToString
  {
    $project: {
      date: { $dateToString: { format: "%Y-%m-%d", date: "$entryTimes" } }
    }
  },
  // Filter documents for the last month
  {
    $match: {
      $and: [
        { date: { $gte: lastMonthStartDate.toISOString().substring(0, 10) } }, // Start date of last month
        { date: { $lte: lastMonthEndDate.toISOString().substring(0, 10) } }    // End date of last month
      ]
    }
  },
  // Group by date and count the number of entries for each date
  {
    $group: {
      _id: "$date",
      count: { $sum: 1 }
    }
  },
  // Sort the results by date
  { $sort: { _id: 1 } }
])
.exec((err, result) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Vehicle entries count for the last month:", result);
});

```

## Last Month Vehicle List

```js
const VehicleEntry = require('./models/vehicleEntry'); // Assuming you have a Mongoose model defined for your vehicle entries

// Calculate the start and end dates of the last month
const currentDate = new Date();
const lastMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
const lastMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

VehicleEntry.aggregate([
  // Unwind the entryTimes array to create a document for each entry time
  { $unwind: "$entryTimes" },
  // Project the date part of the entry time using $dateToString
  {
    $project: {
      date: { $dateToString: { format: "%Y-%m-%d", date: "$entryTimes" } }
    }
  },
  // Filter documents for the last month
  {
    $match: {
      $and: [
        { date: { $gte: lastMonthStartDate.toISOString().substring(0, 10) } }, // Start date of last month
        { date: { $lte: lastMonthEndDate.toISOString().substring(0, 10) } }    // End date of last month
      ]
    }
  },
  // Group by date and count the number of entries for each date
  {
    $group: {
      _id: "$date",
      count: { $sum: 1 }
    }
  },
  // Sort the results by date
  { $sort: { _id: 1 } }
])
.exec((err, result) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Vehicle entries count for the last month:", result);
});
```
