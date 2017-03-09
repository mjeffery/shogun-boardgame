import { intersection } from 'lodash'

const isOneDiff = (a, b) => Math.abs(a - b) == 1

const anyVertsFormEdges = (polygon, verts) => {
	if(verts.length < 2) return false;
	
	const indices = verts
		.map( v => polygon.indexOf(v) )
		.filter( v => v >= 0 )
		.sort();

	for(let i = 1; i < indices.length; i++) {
		if(isOneDiff(indices[i], indices[i - 1])) {
			return true;
		}
	}

	return indices[0] == 0 && 
		   indices[indices.length - 1] == polygon.length - 1;
}

const isAdjacent = (a, b) => {
	const shared = intersection(a.vertIndices, b.vertIndices);
	return anyVertsFormEdges(a.vertIndices, shared)
		&& anyVertsFormEdges(b.vertIndices, shared);
}

const createAdjacencyMatrix = board => {
	const adj = {};

	board.territories.forEach( t => adj[t.id] = [] );

	for(let i = 0; i < board.territories.length - 1; i++) {
		let ti = board.territories[i];

		for(let j = i+1; j < board.territories.length; j++) {
			let tj = board.territories[j];

			if(isAdjacent(ti, tj)) {
				adj[ti.id].push(tj.id);
				adj[tj.id].push(ti.id);
			}
		}
	}	

	return adj;
}

export { isAdjacent, createAdjacencyMatrix };
