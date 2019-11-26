# maths300-lesson-area-of-triangle

## Functionality
* Demonstration: start with 100 atoms, go through 20 years of radioactivity decay process. At each year generate random numbers between 1 and 6 for each atom, then roll a dice and all the atoms with the number rolled by the dice is decayed. Repeat this process for 20 years.
	*Demo mode: 
		1. First click of each roll dice button, rolls dice for creating each atom's random number. 
		2. Second click rolls the dice to get the number for which all atoms should be decayed.
		3. Then all the atoms with the roll of the dice from step 2 is highlighted.
		4. The highlighted atoms are decayed (i.e. turns blue).
		5. The steps from 1-4 repeated for each year, until 20.
	*Auto mode: this mode automates the process above, such that the user clicks are removed and replaced with a pause/resume feature.
* Many trials: The number of atoms and the probability of decay is obtained from the user. The process from the previous module is repeated for each year until all the atoms have been decayed. The graph color indicating number of atoms left changes from red to blue when more than half of atoms have decayed and this year is also shown to the user.
	*Demo mode: at each click the decay process advances by 1 year.
	*Auto mode: the decay process for each year is automated from the start until it reaches its half life point (i.e. half atoms have decayed), then the user resumes the process until the remaining atoms have decayed.
