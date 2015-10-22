#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	ofBackground(0,0,0);
    ofEnableDepthTest();

    shader.load("patterns.vert", "patterns.frag");
}

//--------------------------------------------------------------
void ofApp::update(){
    
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    cam.begin();
    
    shader.begin();
    shader.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shader.setUniform1f("u_time", ofGetElapsedTimef());

    ofSetColor(255, 0, 0);
    ofDrawIcoSphere(100);
    
    shader.end();
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

