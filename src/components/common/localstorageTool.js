let Tools = {};
let storage =  window.localStorage;

//0、获取数据
let prods = JSON.parse(storage.getItem('prods') || '{}');

//1、添加（数据是以对象格式侟储的，但localStorage不能存对象，只能转为字符串于存储）
Tools.saveProds = function(prods){
	storage.setItem("prods",JSON.stringify(prods));
}

//2、删除
Tools.deleteProdById = function(id){
	delete prods[id];
	this.saveProds(prods);
}

//3、修改
Tools.updateProds = function(p,callback){
	if (prods[p.id]){//原本商品存在，只修改数据
		prods[p.id] += p.num;
	} else {
		prods[p.id] = p.num;
	}
	this.saveProds(prods);
	callback && callback();
}

//获取到storage
Tools.getProds = function(){
    return JSON.parse(storage.getItem('prods')||'{}');
}


//4、查询商品总数
Tools.getTotalProdsNum = function(){
	let sum = 0;
	for (let id in prods) {
		sum += prods[id];
	}
	return sum;
}
export default Tools;
