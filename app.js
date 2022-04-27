    const input = document.getElementById("nameInput"); 
    var teams = [
    'บ้าน Ravenclaw', 
    'บ้าน Gryffindor',
    'บ้าน Slytherin',
    'บ้าน Hufflepuff',
    ];
    
    function setup() { 
        var values = input.value;
        var person = values.split(",");
        var students = person.sort(() => Math.random() - 0.5);
        console.log(students);      
        
        // shuffle the lists of students and words
        students = shuffle(students);
        teams = shuffle(teams);
        
        var output = 'ผลการคัดเลือก';
        
        var numStudents = students.length;
        var numTeams = teams.length;
        console.log(numStudents);  

        var teamSize = numStudents / numTeams;
        var smallTeamSize = floor(teamSize);
        var bigTeamSize = floor(teamSize) + 1;
            
        var numSmallTeams = (numTeams*bigTeamSize - numStudents)
        var numBigTeams = numTeams - numSmallTeams;
        console.log(numSmallTeams + ' groups of ' + smallTeamSize);
        console.log(numBigTeams + ' groups of ' + bigTeamSize + '\n');
        
        // list small teams
        var whichTeam = 0;
        for(var i=0; i<  numSmallTeams*smallTeamSize; i+=smallTeamSize){

                output += '<p>';
                output += teams[whichTeam];
                output += '<p>มีจำนวนนักเรียนในบ้าน ทั้งหมด ' + smallTeamSize +' คน<p>';
                

                for(var j=i;j<i+smallTeamSize;j++){
                output += students[j];
                if(!(j==i+smallTeamSize-1)){
                    output += '<p>';
                }
            
                }
            
            whichTeam++;
        }
        

        // list big teams
        for(var i=numSmallTeams*smallTeamSize; i< numStudents; i+=bigTeamSize){

                output += '<p>';
                output += teams[whichTeam];
                output += '<p>มีจำนวนนักเรียนในบ้าน ทั้งหมด ' + bigTeamSize +' คน<p>';

                for(var j=i;j<i+bigTeamSize;j++){
                output += students[j];
                if(!(j==i+bigTeamSize-1)){
                    output += ' <p> ';
                    
                }
                }
        
            whichTeam++;
        }
        
        document.getElementById("output").innerHTML = output;
        console.log(output);
        
    } 
    