function testJackpot(slotMachineOutcome) {
    const firstElement = slotMachineOutcome[0];
    for (let i = 1; i < slotMachineOutcome.length; i++) {
        if (slotMachineOutcome[i] !== firstElement) {
        return false;
        }
    }
    return true;
}