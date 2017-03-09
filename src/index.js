import { inspect } from 'util'
import { createAdjacencyMatrix } from './mapAdjacency'

const board = {
	vertices: [
		[20, 120], [120, 20], [220, 120], [120, 220], [120, 120]
	],
	regions: [{
		id: 0,
		name: 'east',
		color: 'red'
	}, {
		id: 1,
		name: 'west',
		color: 'blue'
	}],
	territories: [{
		id: 0,
		name: 'leftitania',
		vertIndices: [0, 1, 4],
		region: 0
	}, {
		id: 1,
		name: 'upistan',
		vertIndices: [1, 2, 4],
		region: 0
	}, {
		id: 2,
		name: 'rightasia',
		vertIndices: [2, 3, 4],
		region: 1
	}, {
		id: 3,
		name: 'downland',
		vertIndices: [3, 0, 4],
		region: 1
	}],
	seaRoutes: [
		[1, 3]	
	]
};

const adjacencies = createAdjacencyMatrix(board);
console.log( inspect(adjacencies, { depth: null }))
