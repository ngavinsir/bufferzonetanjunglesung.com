import { getDataFromFile } from '../../utilities/markdown';
import rooms, { getRandom } from './_rooms.js';

const contents = JSON.stringify({
	rooms: [...rooms.values()],
	randomRooms: getRandom().slice(0, 4),
	roomCategories: getDataFromFile('data/category-room.yml').categories,
	roomFacilities: getDataFromFile('data/facility-room.yml').roomFacilities,
	publicFacilities: getDataFromFile('data/facility-room.yml').publicFacilities
});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}