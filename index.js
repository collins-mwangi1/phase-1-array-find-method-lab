// code your solution here
// writting a function superbowlwin

function superbowlwin(superBowls) {
    for (let i= 0; i < superBowls.length; i++) {
}
//checknif the result property is 'win'
if (superBowls[i].result === 'win') {
    return superBowls[i].year;
}
}
// if no win is found, return undefined
return undefined;


module.exports = superbowlwin;
