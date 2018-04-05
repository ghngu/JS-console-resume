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


var skills = ['manual mill & lathe', 'hot forging', 'surface grinding'];

console.log('\n' + 'My Previous Experience: ');

for (e = 0; e < exp.length; e++) {
    console.log('   * ' + exp[e].place + '- ' + exp[e].role + ': ' + exp[e].jobDesc);
};

console.log('\n' + 'Skills:');

for (var s = 0; s < skills.length; s++) {
    console.log('   * ' + skills[s]);
}