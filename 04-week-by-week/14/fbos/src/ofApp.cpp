#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	ofBackground(0,0,0);
    ofEnableDepthTest();
    
    ofDisableArbTex();

    width = 1000;
    height = 500;
    
    shaderNoise.load("", "3d-snoise.frag");
    textureNoise.allocate(width, height);
    
    shaderNormal.load("", "normal.frag");
    textureNormal.allocate(width, height);
    
    shaderExtrusion.load("shader.vert", "shader.frag");
    
    // You can use also:
    //
    // ofPlanePrimitive(float width, float height, int columns, int rows)
    
    //  Let's contruct a flat mesh... is like a fabric... the dots are conected but with out relieve
    //
    int scale = 5;
    int w = width/scale;
    int h = height/scale;
    for (int y = 0; y < h; y++){
        for (int x = 0; x<w; x++){
            
            //  Per pixel we set the position, normal and texCoord
            //
            float offsetX = 0;
            float offsetY = (x%2==1)?0.5:0.0;
            mesh.addVertex(ofPoint((x+offsetX)*scale,(y+offsetY)*scale,0));
            mesh.addNormal(ofPoint(1,0,0));
            mesh.addTexCoord(ofVec2f((float)(x+offsetX)/(float)w,(float)(y+offsetY)/(float)h));
        }
    }
    
    //  Finally we set the indexes... We tell openGL how the vertex are connected in triangles (a,b,c)
    //
    for (int y = 0; y<h-1; y++){
        for (int x=0; x<w-1; x++){
            if(x%2==0){
                mesh.addIndex(x+y*w);				// a
                mesh.addIndex((x+1)+y*w);			// b
                mesh.addIndex(x+(y+1)*w);			// d
                
                mesh.addIndex((x+1)+y*w);			// b
                mesh.addIndex((x+1)+(y+1)*w);		// c
                mesh.addIndex(x+(y+1)*w);			// d
            } else {
                mesh.addIndex((x+1)+y*w);			// b
                mesh.addIndex(x+y*w);				// a
                mesh.addIndex((x+1)+(y+1)*w);		// c
                
                mesh.addIndex(x+y*w);				// a
                mesh.addIndex(x+(y+1)*w);			// d
                mesh.addIndex((x+1)+(y+1)*w);		// c
            }
        }
    }
    
    light.setDiffuseColor(ofFloatColor(1.,1.,0.9));
    light.setPosition(100, 100, 1000);
}

//--------------------------------------------------------------
void ofApp::update(){
    
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    // NOISE
    textureNoise.begin();
    shaderNoise.begin();
    shaderNoise.setUniform2f("u_resolution", width, height);
    shaderNoise.setUniform1f("u_time", ofGetElapsedTimef());

    ofClear(0, 0, 0);
    ofRect(0, 0, width, height);
    
    shaderNoise.end();
    textureNoise.end();
    
    // NORMAL
    textureNormal.begin();
    shaderNormal.begin();
    shaderNormal.setUniformTexture("u_tex0", textureNoise, 0);
    shaderNormal.setUniform2f("u_resolution", width, height);
    shaderNormal.setUniform2f("u_tex0Resolution", width, height);
    shaderNormal.setUniform1f("u_time", ofGetElapsedTimef());
    
    ofClear(0, 0, 0);
    ofRect(0, 0, width, height);
    
    shaderNormal.end();
    textureNormal.end();
    
    
    
    
    shaderExtrusion.load("shader.vert", "shader.frag");
    cam.begin();
    ofEnableLighting();
    light.enable();
    
    light.draw();
    
    ofPushMatrix();
    
    //  Center the mesh;
    //
    ofTranslate(-500, -250);
    
    shaderExtrusion.begin();
    shaderExtrusion.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shaderExtrusion.setUniform1f("u_time", ofGetElapsedTimef());
    
    // HeightMap
    shaderExtrusion.setUniformTexture("u_tex0", textureNoise, 0);
    
    // NormalMap
    shaderExtrusion.setUniformTexture("u_tex1", textureNormal, 1);
    
    mesh.draw();
    
    ofPopMatrix();
    shaderExtrusion.end();
    
    light.disable();
    ofDisableLighting();
    cam.end();
    
//    textureNoise.draw(0,0);
}

//--------------------------------------------------------------
void ofApp::keyPressed  (int key){
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){ 
	
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
	
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}

