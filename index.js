function updateObjectWithKeyandValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

var recipes = {
  eggs: 3,
  bacon: 4,
  sasuage: 5
}

updateObjectWithKeyandValue(recipes,"vanilla", "2 cups")
recipes


function destructivelyUpdateWithKeyAndValue(object, key, value){
  object[key] = value
}

function deleteFromObjectKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){

}
