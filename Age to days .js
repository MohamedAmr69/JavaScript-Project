function calcAge(age) {
	if (typeof age === 'number') {
		return age * 365;
  } else {
		    return "error! You should input an number";
  }
}