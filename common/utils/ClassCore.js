/**
 * @description  classl类添加，删除，判断
 */
const ClassCore = {
	//添加类
	addClass: function(element, clsName){
		if(!clsName)
			return;
		if(element.classList){
			element.classList.add(clsName);
		}else if(!ClassCore.hasClass(clsName)){
			element.className + ' ' + clsName;
		}
		return element;
	},

	//删除类
	removeClass: function(element, clsName){
		if(!clsName)
			return;
		if(element.classList){
			element.classList.remove(clsName);
		}else if(ClassCore.hasClass(clsName)){
			element.className = element.className
          		.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
          		.replace(/\s+/g, ' ') // multiple spaces to one
          		.replace(/^\s*|\s*$/g, ''); // trim the ends
		}
		return element;
	},

	//判断是否存在某个类
	hasClass: function(element, clsName){
		if(!clsName)
			return false;
		if(element.classList){
			return element.classList.contains(clsName);
		}
		return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	},

	//类切换
	classToggle: function(element, clsName){
		return ClassCore.hasClass(clsName)?
			ClassCore.removeClass(clsName):
			ClassCore.addClass(clsName);
	}
};
export default ClassCore;