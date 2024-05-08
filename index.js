/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


// Function to calculate new velocity
function calcNewVel(vel, acc, time) {
  // Check if inputs are valid
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
      throw new Error('Invalid input: All parameters must be numbers.');
  }
  // First we need to convert velocity to meters per second because acce;leration is given in meters per second
  const velInMps = vel * 1000 / 3600;
  // Calculate new velocity in m/s
  const newVelInMps = velInMps + acc * time;
  // Convert new velocity to km/h
  return newVelInMps * 3600 / 1000;
}

// Calculate new values
const d2 = d + (vel * (time / 3600)); // Convert time to hours for consistent units
const rf = fuel - (fbr * time); // Calculate remaining fuel
const vel2 = calcNewVel(vel, acc, time); // Calculate new velocity based on acceleration

// Output corrected values
console.log(`Corrected New Velocity: ${vel2.toFixed(0)} km/h`);
console.log(`Corrected New Distance: ${d2.toFixed(0)} km`);
console.log(`Corrected Remaining Fuel: ${rf.toFixed(0)} kg`);





