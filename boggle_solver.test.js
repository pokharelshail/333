let boggle_solver = require('/home/codio/workspace/Boggle_Impl2_After_CodeReview/boggle_solver.js');
/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {
    
    test('3x3 Grid', () => {
      let grid = [['B', 'E', 'Y'],
                  ['A', 'T', 'P'],
                  ['Y', 'N', 'I']];
      
      let dictionary = ['bat', 'bay', 'et', 'be', 'bet', 'an', 'ant', 'pity', 
                        'pin', 'pint','ni', 'nipe'];
      let expected = ['bat', 'bay', 'bet', 'ant', 'pity', 'pin', 'pint', 'nipe'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    })
    
    test('4x4 Grid', () => {
      let grid = [['A', 'X', 'U', 'D'],
                  ['E', 'R', 'I', 'P'],
                  ['T', 'N', 'O', 'L'],
                  ['M', 'W', 'B', 'C']];
      
      let dictionary = ['boil', 'bet', 'tea', 'low', 'lo', 'din', 'stir', 'co', 
                        'core', 'po','pow'];
      let expected = ['boil', 'tea', 'low', 'din', 'core', 'pow'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    })
    
    test('5x5 Grid', () => {
      let grid = [['D', 'L', 'A', 'P', 'B'],
                  ['O', 'R', 'I', 'X', 'F'],
                  ['G', 'C', 'E', 'N', 'U'],
                  ['E', 'W', 'K', 'C', 'M'],
                  ['H', 'J', 'O', 'Z', 'V'],
                 ];

      let dictionary = ['do', 'doge', 'stick', 'li', 'lin', 'quip', 'drip', 'fun', 
                      'bare', 'must','sing'];
      let expected = ['doge', 'lin', 'drip', 'fun'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    })  
  });

  
    describe('Problem contraints', () => {
    // Cases such as Qu
    test('Contains St', () => {
      let grid = [['A', 'St', 'U', 'D'],
                  ['E', 'R', 'I', 'P'],
                  ['T', 'N', 'O', 'L'],
                  ['M', 'W', 'St', 'C']];
      
      let dictionary = ['stir', 'rip', 'stem', 'strip', 'clon', 'stop', 'dire', 'lip', 
                        'win', 'mint'];
      let expected = ['stir', 'rip', 'strip', 'clon', 'stop', 'dire', 'lip'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    })
    
    test('Contains Qu', () => {
      let grid = [['Qu', 'X', 'U', 'D'],
                  ['E', 'R', 'I', 'P'],
                  ['T', 'N', 'O', 'L'],
                  ['M', 'W', 'Qu', 'C']];
      
      let dictionary = ['quet', 'lont', 'qurol', 'quen', 'clop', 'wop', 'quor', 'di', 
                        'nilo', 'po'];
      let expected = ['quet', 'lont', 'qurol', 'quen', 'clop', 'wop', 'quor', 'nilo'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    })
  });


  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
    test('Not NxN Grid', () => {
      let grid = [['A', 'B', 'C'],
                  ['E', 'F', 'G'],
                  ['I', 'J', 'K'],
                  ['L', 'M', 'N']];
      let dictionary = ['aej', 'bfk', 'bl'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
   
    
    test('Contains Numbers', () => {
      let grid = [['A', 'B', 'C', 'D'],
                    ['1', 'S', 'G', 'H'],
                    ['I', 'J', '3', 'L'],
                    ['M', '7', 'O', 'P']];
      let dictionary = ['nmi', 'skpl', 'hd'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});
