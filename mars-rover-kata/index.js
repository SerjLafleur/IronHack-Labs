// Rover object goes here:

let Rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travellog: []
}
let obtaculo1 = {
    x: 6,
    y: 6
}

// ======================
function turnLeft(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W'
            console.log('The Rover looks West');
            break;
        case 'W':
            rover.direction = 'S'
            console.log('The Rover looks South');
            break;
        case 'S':
            rover.direction = 'E'
            console.log('The Rover looks East');
            break;
        case 'E':
            rover.direction = 'N'
            console.log('The Rover looks North');
            break;
        default:
            break;
    }

    console.log('turnLeft was called!');
  }
  
  function turnRight(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E'
            console.log('The Rover looks East');
            break;
        case 'E':
            rover.direction = 'S'
            console.log('The Rover looks South');
            break;
        case 'S':
            rover.direction = 'W'
            console.log('The Rover looks West');
            break;
        case 'W':
            rover.direction = 'N'
            console.log('The Rover looks North');
            break;
        default:
            break;
    }
    console.log('turnRight was called!');
  }
  
  function moveForward(rover) {
      switch (rover.direction) {
          case 'N':
              rover.y--
              console.log(`The rover is in this ${rover.x},${rover.y} position.`)
              break;
            case 'W':
              rover.x--
              console.log(`The rover is in this ${rover.x},${rover.y} position.`)
              break;
            case 'S':
              rover.y++
              console.log(`The rover is in this ${rover.x},${rover.y} position.`)
              break;
            case 'E':
              rover.x++
              console.log(`The rover is in this ${rover.x},${rover.y} position.`)
              break;
          default:
              break;
      }
    console.log('moveForward was called');
  }

  function moveBackward(rover) {
    switch (rover.direction) {
        case 'N':
            rover.y++
            console.log(`The rover is in this ${rover.x},${rover.y} position.`)
            break;
          case 'W':
            rover.x++
            console.log(`The rover is in this ${rover.x},${rover.y} position.`)
            break;
          case 'S':
            rover.y--
            console.log(`The rover is in this ${rover.x},${rover.y} position.`)
            break;
          case 'E':
            rover.x--
            console.log(`The rover is in this ${rover.x},${rover.y} position.`)
            break;
        default:
            break;
    }
  console.log('moveBackward was called');
}

  function command (rover, cmd) {
    if(rover.x == obtaculo1.x && rover.y == obtaculo1.y){
        moveForward(Rover)
        console.log('Obtáculo')
        return
    }
        
    for (let i = 0; i < cmd.length; i++) {
        if (cmd[i] === 'r' || cmd[i] === 'l' || cmd[i] === 'f' || cmd[i] === 'b' ) {
            switch (cmd[i]) {
                case 'r':
                    turnRight(Rover)
                    break;
                case 'l':
                    turnLeft(Rover)
                    break;
                case 'f':
                    if(rover.x >= 0 && rover.x <= 9 && rover.direction == 'N') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    if(rover.x == 0 && rover.direction == 'W') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    if(rover.x == 0 && rover.y == 9 && rover.direction == 'S') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    if(rover.x == 9 && rover.direction == 'E') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    moveForward(Rover)
                    break;
                case 'b':
                    if(rover.x >= 0 && rover.x <= 9 && rover.direction == 'S') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    if(rover.x == 0 && rover.direction == 'E') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    if(rover.x == 0 && rover.y == 9 && rover.direction == 'N') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    if(rover.x == 9 && rover.direction == 'W') {
                        console.log('Rover cant move, end of zone.')
                        return false;
                    }
                    moveBackward(Rover)
                    break;
                default:
                    break;
            }
            Rover.travellog.push({x: Rover.x, y: Rover.y})
        } else {
            console.log('-------------------------------------->>The route command is not correct')
        }
        

    }   
        Rover.travellog.push({x: Rover.x, y: Rover.y})
  }



command(Rover, 'ff')
console.log(Rover.travellog)