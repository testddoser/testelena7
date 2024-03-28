gdjs.loadingCode = {};
gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects1= [];
gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects2= [];
gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects3= [];
gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects4= [];
gdjs.loadingCode.GDElenaObjects1= [];
gdjs.loadingCode.GDElenaObjects2= [];
gdjs.loadingCode.GDElenaObjects3= [];
gdjs.loadingCode.GDElenaObjects4= [];


gdjs.loadingCode.asyncCallback9003748 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Начальная локация", false);
}}
gdjs.loadingCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loadingCode.asyncCallback9003748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadingCode.asyncCallback9002988 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Советы"), gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects3);

{for(var i = 0, len = gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects3.length ;i < len;++i) {
    gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects3[i].getBehavior("Text").setText("Тюрьма не хуй - сиди кайфуй");
}
}
{ //Subevents
gdjs.loadingCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.loadingCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects2) asyncObjectsList.addObject("Советы", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loadingCode.asyncCallback9002988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadingCode.asyncCallback9002788 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Советы"), gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects2);
{for(var i = 0, len = gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects2.length ;i < len;++i) {
    gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects2[i].getBehavior("Text").setText("Держи заточку на готове");
}
}
{ //Subevents
gdjs.loadingCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.loadingCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loadingCode.asyncCallback9002788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadingCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.loadingCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.loadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects1.length = 0;
gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects2.length = 0;
gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects3.length = 0;
gdjs.loadingCode.GD_951057_951086_951074_951077_951090_951099Objects4.length = 0;
gdjs.loadingCode.GDElenaObjects1.length = 0;
gdjs.loadingCode.GDElenaObjects2.length = 0;
gdjs.loadingCode.GDElenaObjects3.length = 0;
gdjs.loadingCode.GDElenaObjects4.length = 0;

gdjs.loadingCode.eventsList3(runtimeScene);

return;

}

gdjs['loadingCode'] = gdjs.loadingCode;
