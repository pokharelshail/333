/*
 * Author: Shreeshail Pokharel @02931612
 * Source: https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/
 * Source: Intro to SWE students for helping implement isPrefix and isValidWord
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */


exports.findAllSolutions = function(grid, dictionary) {
	let solutions = [];
	//Convert everything to lowercase
	convertCase(grid,dictionary);
	//Create Trie tree 
	let trie = Trie(dictionary);

	//Edge Case 
	if(grid == null || dictionary == null)
	{
		return solutions;
	}
	if(grid.length==0)
	{
		return solutions;
	}
	// Loop till i < grid.length
	for(let i=0; i<grid.length;i++){
		if(grid[i].length!= grid.length ){
			return solutions;
		}
	}

	let result= new Set();
	for(let j= 0; j<grid.length ; j++){
		for(let i= 0; i<grid.length ; i++){
			let word= "";
			let checked = new Array(grid.length).fill(false).map(() => new Array(grid.length).fill(false));
			find(word,i,j,grid,checked,trie,result);
		}
	}  
	solutions= Array.from(result);
	return solutions;
};

function TrieNode(value) {
	this.value=value;
	this.children = new Array();
	this.isValidWord = false;
}


function Trie(dict) {
	var root = new TrieNode("");
	if(dict.length==0){
		return;
	}
	for(let words of dict){
		var node = root;
		for(let  i =0;i<words.length;i++){
			var letter = words[i];
			var ord  = letter.charCodeAt(0) - 97;
			var currentNode = node.children[ord];
			if(node.children[ord]== undefined){
				currentNode = new TrieNode(letter);
				node.children[ord]=currentNode;       
			}
			node=currentNode;
		}
		node.isValidWord=true; 
	}
	return root;
}

function find(word,x,y,grid,checked,trie,result){
	let directions=[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]];
  
	if(y<0 || x<0 || y>=grid.length || x >=grid.length || checked[x][y]==true){
		return;
	}
    
	word +=  grid[x][y];
	if(checkPrefix(word,trie)){
		checked[x][y]=true;
		if (isValidWord(word,trie)){
       
			if(word.length>2){
				result.add(word);
			}
		}
 
		for(let i=0;i<8;i++){
			find(word,x+directions[i][0],y+directions[i][1],grid,checked,trie,result);  
		}
	} 
	checked[x][y]=false;   
}

function checkPrefix(word,trie){
	let tword="";
	let currentNode=trie;
  
	for(let i =0;i<word.length;i++){
		if(currentNode!=undefined){  
			for(let node of currentNode.children){
				if(node!=undefined && node.value==word[i]){
					tword+=word[i];
					currentNode=node;
					break;
				}
			}
		}
	}
	if(word==tword){
		return true;
	}
	return false;
  
}

function isValidWord(word,trie){
	let tword="";
	let currentNode=trie;
	for(let i =0;i<word.length;i++){
		if(currentNode!=undefined){ 
			for(let node of currentNode.children){    
				if(node!=undefined && node.value==word[i]){
					tword+=word[i];
					currentNode=node;
					break;
				}
			}
		}
	}
	if(word==tword && currentNode.isValidWord==true){  
		return true;
	}  
	return false;
}

function convertCase(grid,dict){
	for(let i=0;i<grid.length;i++){
		for(let j=0;j<grid.length;j++){
			if(grid[i][j]){
				grid[i][j]= grid[i][j].toLowerCase();
			}  
		}
	}
  
	for(let j=0;j<dict.length;j++){
		dict[j]=dict[j].toLowerCase();
	}
}

var grid = [["T", "W", "Y", "R"],
	["E", "N", "P", "H"],
	["G", "Z", "Qu", "R"],
	["O", "N", "T", "A"]];
var dictionary = ["art", "ego", "gent", "get", "net", "new", "newt", "prat",
	"pry", "qua", "quart", "quartz", "rat", "tar", "tarp",
	"ten", "went", "wet", "arty", "egg", "not", "quar"];

console.log(exports.findAllSolutions(grid, dictionary));