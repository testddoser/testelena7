gdjs.start_95viedeoCode = {};
gdjs.start_95viedeoCode.GDElenaObjects1= [];
gdjs.start_95viedeoCode.GDElenaObjects2= [];


gdjs.start_95viedeoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "loading", false);
}}

}


};

gdjs.start_95viedeoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_95viedeoCode.GDElenaObjects1.length = 0;
gdjs.start_95viedeoCode.GDElenaObjects2.length = 0;

gdjs.start_95viedeoCode.eventsList0(runtimeScene);

return;

}

gdjs['start_95viedeoCode'] = gdjs.start_95viedeoCode;
