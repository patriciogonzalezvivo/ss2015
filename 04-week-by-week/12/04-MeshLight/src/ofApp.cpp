#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	ofBackground(0,0,0);
    ofEnableDepthTest();
    
    ofDisableArbTex();
    ofLoadImage(texture, "img.jpg");
    ofLoadImage(normal, "normal.jpg");
    shader.load("shader.vert", "shader.frag");
    
    // You can use also:
    //
    // ofPlanePrimitive(float width, float height, int columns, int rows)
    
    //  Let's contruct a flat mesh... is like a fabric... the dots are conected but with out relieve
    //
    int scale = 5;
    int w = 1000/scale;
    int h = 500/scale;
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
    
    shader.load("shader.vert", "shader.frag");
    
    cam.begin();
    ofEnableLighting();
    light.enable();
    
    light.draw();
    
    ofPushMatrix();
    
    //  Center the mesh;
    //
    ofTranslate(-500, -250);
    
    shader.begin();
    shader.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shader.setUniform1f("u_time", ofGetElapsedTimef());
    
    // HeightMap
    shader.setUniformTexture("u_tex0", texture, 0);
    
    // NormalMap
    shader.setUniformTexture("u_tex1", normal, 1);
    
    mesh.draw();
    
    ofPopMatrix();
    shader.end();
    
    light.disable();
    ofDisableLighting();
    cam.end();
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

