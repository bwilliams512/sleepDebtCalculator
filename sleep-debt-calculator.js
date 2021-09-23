/*
If we don’t sleep enough, we accumulate sleep debt.

This program calculates if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

// Determine how many hours of sleep you get each night of the week
const getSleepHours = day => {
  if (day === 'sunday') {
    return 8
  } else if (day === 'monday') {
    return 7
  } else if (day === 'tuesday') {
    return 6
  } else if (day === 'wednesday') {
    return 6.5
  } else if (day === 'thursday') {
    return 7
  } else if (day === 'friday') {
    return 6
  } else if (day === 'saturday') {
    return 8
  } else {
    return 'Error.'
  }
}

// Uncomment code below to test the function
// console.log(getSleepHours('tuesday'));

// Get the total sleep hours that you actually slept
const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')

// Get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7
}

// Uncomment code below to test functions
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

// Calculate the sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()

  if (actualSleepHours === idealSleepHours) {
    console.log('You achieved the perfect amount of sleep this week.')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
  } else {
    console.log('Oops. Something went wrong')
  }
}

// Start program by calling the calculateSleepDebt() function
calculateSleepDebt()
