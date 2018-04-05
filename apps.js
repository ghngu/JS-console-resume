var name = 'george nguyen';


console.log('   Name: ' + name.toUpperCase());

var mySelf = [

    'Career: student',
    'Description: 26 year old Web Dev student at Covalence'
]

for (var i = 0; i < mySelf.length; i++) {
    console.log('   ' + mySelf[i]);
}

console.log('\n' + 'Interest: ')

var interest = ['Video Games', 'Movies', 'Reading', 'Cars'];

for(var x = 0; x < interest.length; x++) {
    console.log('   * ' + interest[x]);
}

var exp = [
    {
        place: 'Birmingham Fastener',
        role: 'Machine Tech',
        jobDesc: 'Complete a tool changover based off of job requirements.'
    },
    {
        place: 'University of Alabama-Birmingham',
        role: 'Student',
        jobDesc: "Don't fail."
    },
    {
        place: 'Lee Garden',
        role: 'Server',
        jobDesc: 'Provide an enjoyable experience for all costomers.'
    }
];

console.log('\n' + 'My Previous Experience: ');

// function displayPosition(name, jobTitle, description) {
//     console.log('* ' + name + ': ' + jobTitle + '- ' + description);
// }

// displayPosition('Fish-R-Us', 'Canner', 'canned fish');
// displayPosition('Prep-all', 'Prepper', 'Prepared various items in stages');
// displayPosition('Quality-Matresses', 'Quality associate', 'tested each new matress for softness and back support');

for (e = 0; e < exp.length; e++) {
    console.log('* ' + exp[e].place + '- ' + exp[e].role + ': ' + exp[e].jobDesc);
};

console.log('\n' + 'Skills:');

function displaySkill(bam, skill) {
    if (bam == 1) {
        console.log('* ' + 'Bam: ' + skill );
    } else {
        console.log('* ' + skill);
    }
};

displaySkill(0,'Manual mill & lathe');
displaySkill(0, 'Hot Forging');
displaySkill(0, '3d Modelling');
displaySkill(1, 'preciscion marksmanship');
displaySkill(0, 'Surface Grinder');
displaySkill(1, 'FPS games');
displaySkill(1, 'Building Keyboards');
displaySkill(1, 'Culinary');
displaySkill(0, 'Fishing');
//var skills = ['manual mill & lathe', 'hot forging', 'surface grinding'];

// for (var s = 0; s < skills.length; s++) {
//     console.log('   * ' + skills[s]);
// }