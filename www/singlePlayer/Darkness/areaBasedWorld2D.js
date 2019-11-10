var globalPos = [true, false];
var areas = [true, false, false];
var areaInit = [];
var playerHealth = 100;
var stamina = 100;
var mapping = false;
var flashlight = true;
var batteries = 0;
var flashlightPower = 100;
var lantern = true;
var change = false;
var currentTime = 0;
var objectXBrightness = 0;
var timer1 = 0;
var house1Door = false;
var lightSwitch1 = false;
var reload = false;
var battery1 = false;
var message = true;
var timer2 = 0;
var ongoingmessage = false;
var monsterMoved = false;
var timer3 = 0;
createAudio("../ludificioEngine/audioFiles/soundEffects/howlingWind.mp3", "wind");
createAudio("../ludificioEngine/audioFiles/soundEffects/bushRustling.mp3", "bush");
createAudio("../ludificioEngine/audioFiles/soundEffects/monsterBreathing.mp3", "monsterBreathing");
createAudio("bassRumble.mp3", "bass");
createAudio("giantMonsterSounds.mp3", "monsterSounds");
createAudio("impact.mp3", "impact");
changeVolume("wind", .15);
changeVolume("monsterBreathing", .25);
changeVolume("bush", .3);
changeVolume("bass", 1);
changeVolume("monsterSounds", 1);
changeVolume("impact", 1);
timeSong("monsterSounds", 5)
timeSong("monsterBreathing", 3)
timeSong("impact", 0)

function modifiedAreaControls(areaId) {
    for (var i = 0; i <= maxSprites; i++) {
        if (spriteUser[areaId][i] == true) {
            if (charStr[jQuery.inArray("w", charStr)] == "w") {
                dy[areaId][i] -= 6;
            }
            if (charStr[jQuery.inArray("s", charStr)] == "s") {
                dy[areaId][i] += 6;
            }
            if (charStr[jQuery.inArray("a", charStr)] == "a") {
                dx[areaId][i] -= 6;
            }
            if (charStr[jQuery.inArray("d", charStr)] == "d") {
                dx[areaId][i] += 6;
            }
            if (charStr[jQuery.inArray("f", charStr)] == "f") {
                if (flashlight == true) {
                    flashlight = false;
                } else if (flashlight == false) {
                    flashlight = true;
                }
                charStr[jQuery.inArray("f", charStr)] = "";
            }
            if (charStr[jQuery.inArray("q", charStr)] == "q") {
                if (lantern == true) {
                    lantern = false;
                } else if (lantern == false) {
                    lantern = true;
                }
                charStr[jQuery.inArray("q", charStr)] = "";
            }
            if (charStr[jQuery.inArray("r", charStr)] == "r") {
                if (batteries > 0) {
                    batteries -= 1;
                    flashlightPower = 100;
                } else {
                    reload = true;
                }
                charStr[jQuery.inArray("r", charStr)] = "";
            }
            /*if (charStr[jQuery.inArray("x", charStr)] == "x")
            {
            	zoom(1.1, areaId);
            	dx[areaId][i] = 0;
            	dy[areaId][i] = 0;
            }
            if (charStr[jQuery.inArray("z", charStr)] == "z")
            {
            	zoom(.9, areaId)
            	dx[areaId][i] = 0;
            	dy[areaId][i] = 0;
            }*/
            if (shiftKey && stamina > 0) {
                dx[areaId][i] *= 2;
                dy[areaId][i] *= 2;
                stamina -= .15;
            }
        }
        areaCollided[areaId][i] = false;
    }
}

function area1Reset() {
    /*for(i = 2; i <= 500; i += 2)
    {
    	if(i == 8 || i == 10)
    	{}
    	else{
    		resetRectSprite(0, i);
    	}
    }*/
    for (i = 2; i <= 500; i++) {
        dx[0][i] = 0;
        dy[0][i] = 0;
    }
}

function flashlightBrightness(areaId, spriteId) {
    objectXBrightness = Math.abs(50 / (((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2) - (canvas.width / 2 - mouseXPos) - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2));
    if ((((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2) - (canvas.width / 2 - mouseXPos) - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2) == 0) {
        objectXBrightness = 1;
    }
    if ((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2 < canvas.width / 2) {
        objectXBrightness = Math.abs(50 / (mouseXPos - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2));
        if ((mouseXPos - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2) == 0) {
            objectXBrightness = 1;
        }
    }
    objectYBrightness = Math.abs(50 / (((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2) - (canvas.height / 2 - mouseYPos) - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2));
    if ((((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2) - (canvas.height / 2 - mouseYPos) - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2) == 0) {
        objectYBrightness = 1;
    }
    if ((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2 < canvas.height / 2) {
        objectYBrightness = Math.abs(50 / (mouseYPos - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2));
        if ((mouseYPos - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2) == 0) {
            objectYBrightness = 1;
        }
    }
    if (objectXBrightness < .25) {
        objectXBrightness = 0;
    }
    if (objectYBrightness < .25) {
        objectYBrightness = 0;
    }
    if (objectXBrightness > objectYBrightness + .4) {
        objectXBrightness = objectYBrightness + .4;
    }
    if (objectYBrightness > objectXBrightness + .4) {
        objectYBrightness = objectXBrightness + .4;
    }
    spriteDrawAreaColorA[areaId][spriteId] = objectXBrightness * objectYBrightness * 2;
    spriteDrawAreaColorA[areaId][spriteId + 1] = objectXBrightness * objectYBrightness * 2;
}

function lanternBrightness(areaId, spriteId) {
    objectXBrightness = Math.abs(50 / (((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2) - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2));
    if ((((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2) - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2) == 0) {
        objectXBrightness = 1;
    }
    if ((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2 < canvas.width / 2) {
        objectXBrightness = Math.abs(50 / ((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2 - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2));
        if (((areaSpriteX1[areaId][0] + areaSpriteX2[areaId][0]) / 2 - (areaSpriteX1[areaId][spriteId] + areaSpriteX2[areaId][spriteId]) / 2) == 0) {
            objectXBrightness = 1;
        }
    }
    objectYBrightness = Math.abs(50 / (((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2) - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2));
    if ((((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2) - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2) == 0) {
        objectYBrightness = 1;
    }
    if ((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2 < canvas.height / 2) {
        objectYBrightness = Math.abs(50 / ((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2 - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2));
        if (((areaSpriteY1[areaId][0] + areaSpriteY3[areaId][0]) / 2 - (areaSpriteY1[areaId][spriteId] + areaSpriteY3[areaId][spriteId]) / 2) == 0) {
            objectYBrightness = 1;
        }
    }
    if (objectXBrightness < .3) {
        objectXBrightness = 0;
    }
    if (objectYBrightness < .3) {
        objectYBrightness = 0;
    }
    if (objectXBrightness > objectYBrightness + .4) {
        objectXBrightness = objectYBrightness + .4;
    }
    if (objectYBrightness > objectXBrightness + .4) {
        objectYBrightness = objectXBrightness + .4;
    }
    spriteDrawAreaColorA[areaId][spriteId] = spriteDrawAreaColorA[areaId][spriteId] + objectXBrightness * objectYBrightness * 2;
    spriteDrawAreaColorA[areaId][spriteId + 1] = spriteDrawAreaColorA[areaId][spriteId + 1] + objectXBrightness * objectYBrightness * 2;
}

function survivalWorld() {
    if (flashlight && flashlightPower > 0) {
        flashlightPower -= .0015;
    }
    if (stamina < 100) {
        stamina += .03;
    }
    if (globalPos[0]) {
        if (areas[0]) {
            survivalArea1();
        } else if (areas[1]) {
            survivalWin1();
        }
    } else if (globalPos[1]) {
        if (areas[2]) {
            survivalArea2();
        } else if (areas[3]) {
            survivalWin2();
        }
    }
}

function survivalArea1() {
    area1Reset();
    playSong("wind");
    areaObjectAI();
    modifiedAreaControls(0);
    if (rectContact(0, 1000, 0)) {
        areas[0] = false;
        areas[1] = true;
    }
    spriteDrawAreaColorA[0][6] = 0;
    spriteDrawAreaColorA[0][7] = 0;
    if (getTimeSong("bush") > 3.5) {
        pauseSong("bush");
    }
    if (lightSwitch1) {
        spriteDrawAreaColorA[0][6] = 1;
        spriteDrawAreaColorA[0][7] = 1;
    }
    spriteDrawAreaColorA[0][8] = 0;
    spriteDrawAreaColorA[0][9] = 0;
    drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 0, 0, 1]);
    //followTexture(1000, 1000, "darkGrass", 300, 0)
    areaTextureRect(5, 300, 100, 100, "../ludificioEngine/images/playerModels/shadowPlayer/frontFacing.png", true, true, 0, 0);
    areaTextureRect(1275, 1525, 200, 200, "monster", true, false, 2, 0);
    areaRect(1690, 1435, 20, 10, [255, 255, 255, .5], true, false, 6, 0);
    areaRect(1480, 1450, 140, 50, [255, 255, 255, .5], true, false, 8, 0);
    //areaRect(1250, 850, 900, 600, [0, 0, 0, 1], false, false, 250, 0);
    if (lightSwitch1) {
        areaTextureRect(1250, 850, 900, 600, "../ludificioEngine/images/cursors/flashlight", false, false, 12, 0);
        spriteDrawAreaColorR[0][12] = 50;
        spriteDrawAreaColorG[0][12] = 50;
        spriteDrawAreaColorB[0][12] = 50;
        spriteDrawAreaColorR[0][13] = 50;
        spriteDrawAreaColorG[0][13] = 50;
        spriteDrawAreaColorB[0][13] = 50;
    }
    if (battery1 == false) {
        areaTextureRect(1675, 1000, 50, 50, "battery", true, false, 10, 0);
    }
    areaTextureRect(400, 500, 200, 100, "longdarkPathHorizontal", false, false, 110, 0);
    areaTextureRect(600, 500, 200, 100, "longdarkPathHorizontal", false, false, 112, 0);
    areaTextureRect(800, 500, 200, 100, "longdarkPathHorizontal", false, false, 114, 0);
    areaTextureRect(1000, 600, 100, 200, "longdarkPathVerticle", false, false, 116, 0);
    areaTextureRect(1000, 800, 100, 200, "longdarkPathVerticle", false, false, 118, 0);
    areaTextureRect(1000, 1000, 100, 200, "longdarkPathVerticle", false, false, 120, 0);
    areaTextureRect(1000, 1200, 100, 200, "longdarkPathVerticle", false, false, 122, 0);
    areaTextureRect(1000, 1400, 100, 200, "longdarkPathVerticle", false, false, 124, 0);
    areaTextureRect(1000, 1600, 100, 200, "longdarkPathVerticle", false, false, 126, 0);
    areaTextureRect(1100, 1800, 200, 100, "longdarkPathHorizontal", false, false, 128, 0);
    areaTextureRect(1300, 1800, 200, 100, "longdarkPathHorizontal", false, false, 130, 0);
    areaTextureRect(1500, 1600, 100, 200, "longdarkPathVerticle", false, false, 132, 0);
    areaTextureRect(1600, 1800, 200, 100, "longdarkPathHorizontal", false, false, 134, 0);
    areaTextureRect(1000, 500, 100, 100, "darkPathBottomToLeft", false, false, 136, 0);
    areaTextureRect(1000, 1800, 100, 100, "darkPathTopToRight", false, false, 138, 0);
    areaTextureRect(1500, 1800, 100, 100, "darkPathTopLeftRight", false, false, 140, 0);
    areaTextureRect(1800, 1800, 200, 100, "longdarkPathHorizontal", false, false, 142, 0);
    areaTextureRect(2000, 1800, 200, 100, "longdarkPathHorizontal", false, false, 144, 0);
    areaTextureRect(2200, 1800, 200, 100, "longdarkPathHorizontal", false, false, 146, 0);
    areaTextureRect(2400, 1800, 100, 100, "darkPathHorizontal", false, false, 148, 0);
    areaTextureRect(1500, 1500, 100, 100, "darkPathEndTop", false, false, 150, 0);
    areaTextureRect(2500, 1800, 100, 100, "darkPathEndRight", false, false, 152, 0);
    areaTextureRect(300, 500, 100, 100, "darkPathEndLeft", false, false, 154, 0);
    areaTextureRect(1150, 1450, 500, 400, "../ludificioEngine/images/cursors/flashlight", false, false, 156, 0);
    areaTextureRect(2925, 2075, 50, 50, "lantern", true, false, 158, 0);
    areaTextureRect(2925, 1575, 50, 50, "lantern", true, false, 160, 0);
    areaTextureRect(3000, 1600, 200, 250, "upperGate", true, false, 162, 0);
    areaTextureRect(3000, 1850, 200, 250, "lowerGate", true, false, 164, 0);
    areaTextureRect(3000, 0, 50, 600, "barbwire", true, false, 166, 0);
    areaTextureRect(3000, 600, 50, 500, "barbwire", true, false, 168, 0);
    areaTextureRect(3000, 1100, 50, 500, "barbwire", true, false, 170, 0);
    areaTextureRect(3000, 2100, 50, 500, "barbwire", true, false, 172, 0);
    areaTextureRect(2850, 2000, 200, 200, "lanternLight", false, false, 174, 0);
    areaTextureRect(2850, 1500, 200, 200, "lanternLight", false, false, 176, 0);
    areaRoom(1200, 800, 1000, 700, 50, ["bottom"], [300], [150], [0, 0, 0, 1], 200, 0);
    if (flashlight && flashlightPower > 0) {
        if (lightSwitch1 == false) {
            flashlightBrightness(0, 6);
        }
        flashlightBrightness(0, 8);
        drawPassiveRectTexture(mouseXPos - 150, mouseYPos - 150, 300, 300, "../ludificioEngine/images/cursors/flashlight")
    }
    if (lantern) {
        if (lightSwitch1 == false) {
            lanternBrightness(0, 6);
        }
        lanternBrightness(0, 8);
        drawPassiveRectTexture(spriteAreaX1[0][0] - 75, spriteAreaY1[0][0] - 75, 250, 250, "../ludificioEngine/images/cursors/flashlight");
    }
    if (house1Door) {
        spriteDrawAreaColorA[0][8] = 0;
        spriteDrawAreaColorA[0][9] = 0;
    }
    drawArea(3500, 2500, 0);
    textureAnimation();
    openWorldCamera(0);
    stopAreaUser(0);
    drawPassiveRect(10, canvas.height - 70, playerHealth * 4, 30, [150, 0, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 70, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 35, stamina * 4, 30, [0, 150, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 35, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 105, flashlightPower * 4, 30, [150, 150, 150, 1]);
    drawPassiveRectOutline(10, canvas.height - 105, 400, 30, [0, 0, 0, 1]);
    drawText(155, canvas.height - 35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 105, 100, 30, "flashlight", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(15, canvas.height - 170, 200, 60, "Batteries  " + batteries, "../ludificioEngine/text/fonts/8-bit/white/");
    if ((spriteProximity(0, 164, 0) < 450 && message == true) || (ongoingmessage == true && message == true)) {
        ongoingmessage = true;
        if (20 * Math.random() > 10) {
            playSong("monsterSounds");
            playSong("bass");
            playSong("impact");
            playSong("monsterBreathing")
            drawPassiveRect(0, 0, canvas.width, canvas.height, [150, 0, 0, .35]);
            drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "monster");
            drawText(canvas.width / 2 - 300, 5 * canvas.height / 6, 600, 100, "I can see you", "../ludificioEngine/text/fonts/8-bit/white/");
        }
        timer2 = timer2 + 1;
        if (timer2 >= 75) {
            pauseSong("monsterBreathing")
            drawPassiveRect(0, 0, canvas.width, canvas.height, [0, 0, 0, 1]);
            drawPassiveRectTexture(0, 0, canvas.width, canvas.height, "invertedMonster");
            drawText(canvas.width / 2 - 300, 5 * canvas.height / 6, 600, 100, "I can feel you", "../ludificioEngine/text/fonts/8-bit/white/");
        }
        if (timer2 > 100) {
            message = false;
            pauseSong("bass");
            timeSong("bass", 1);
            pauseSong("impact");
            pauseSong("monsterSounds")
        }
    }
    if (spriteProximity(0, 6, 0) < 175 && lightSwitch1 == false && areaSpriteY1[0][0] < 1450) {
        drawText(canvas.width / 2 - 400, canvas.height / 6 - 50, 800, 100, "press E to turn on the light", "../ludificioEngine/text/fonts/8-bit/white/");
    }
    if (reload) {
        if (timer1 < 200) {
            drawText(3 * canvas.width / 4 - 300, 5 * canvas.height / 6, 600, 100, "no batteries", "../ludificioEngine/text/fonts/8-bit/white/");
        } else {
            timer1 = 0;
            reload = false;
        }
        timer1 += 1;
    }
    if (flashlight == false) {
        drawPassiveRect(mouseXPos - 2.5, mouseYPos - 2.5, 5, 5, [255, 255, 255, 1]);
    }
    if (spriteProximity(0, 8, 0) < 100 && charStr[jQuery.inArray("e", charStr)] == "e" && house1Door == false) {
        exception[0][0][1] = 8;
        exception[0][1][1] = 8;
        exception[0][0][2] = 9;
        exception[0][1][2] = 9;
        exception[0][8][1] = 0;
        exception[0][9][1] = 0;
        exception[0][8][2] = 1;
        exception[0][9][2] = 1;
        house1Door = true;
    }
    if (spriteProximity(0, 6, 0) < 100 && charStr[jQuery.inArray("e", charStr)] == "e" && lightSwitch1 == false) {
        areaColor[0][6] = [0, 0, 0, 1];
        areaColor[0][7] = [0, 0, 0, 1];
        spriteDrawAreaColorR[0][6] = 0;
        spriteDrawAreaColorR[0][7] = 0;
        spriteDrawAreaColorG[0][6] = 0;
        spriteDrawAreaColorG[0][7] = 0;
        spriteDrawAreaColorB[0][6] = 0;
        spriteDrawAreaColorB[0][7] = 0;
        spriteDrawAreaColorA[0][8] = 1;
        spriteDrawAreaColorA[0][9] = 1;
        lightSwitch1 = true;
    }
    if (spriteProximity(0, 10, 0) < 200 && monsterMoved == false) {
        timeSong("bush", 2);
        playSong("bush");
        tpRectSprite(-300, -300, 100, 100, 0, 2);
        monsterMoved = true;
    }
    if (monsterMoved && timer3 <= 50) {
        playSong("impact");
        timer3 += 1;
        if (timer3 == 100) {
            pauseSong("impact");
            timeSong("impact", 1);
        }
    }
    if (spriteProximity(0, 10, 0) < 150 && charStr[jQuery.inArray("e", charStr)] == "e" && battery1 == false) {
        spriteTexture[0][10] = "";
        exception[0][0][10] = 10;
        exception[0][1][10] = 10;
        exception[0][0][11] = 11;
        exception[0][1][11] = 11;
        exception[0][10][1] = 0;
        exception[0][11][1] = 0;
        exception[0][10][2] = 1;
        exception[0][11][2] = 1;
        battery1 = true;
        batteries += 1;
    }
    if (spriteProximity(0, 8, 0) < 200 && house1Door == false) {
        drawText(canvas.width / 2 - 400, canvas.height / 6 - 50, 800, 100, "press E to interact", "../ludificioEngine/text/fonts/8-bit/white/");
    }
    if (spriteProximity(0, 10, 0) < 125 && battery1 == false) {
        drawText(canvas.width / 2 - 450, canvas.height / 6 - 50, 900, 100, "press E to pick up batteries", "../ludificioEngine/text/fonts/8-bit/white/");
        drawText(canvas.width / 2 - 400, canvas.height * 5 / 6 - 50, 800, 100, "press R to reload flashlight", "../ludificioEngine/text/fonts/8-bit/white/");
    }
    if (spriteProximity(0, 164, 0) < 300 && charStr[jQuery.inArray("e", charStr)] == "e") {
        tpRectSprite(2999, 1450, 250, 200, 0, 162);
        tpRectSprite(2999, 2000, 250, 200, 0, 164);
        tpRectSprite(3000, 950, 50, 500, 0, 170);
        tpRectSprite(3000, 450, 50, 500, 0, 168);
        tpRectSprite(3000, -50, 50, 500, 0, 166);
        tpRectSprite(3000, 2200, 50, 500, 0, 172);
        spriteTexture[0][162] = "topGateOpen";
        spriteTexture[0][164] = "bottomGateOpen";
    }
}

function survivalWin1() {
    magic = 98;
    modifiedAreaControls(1);
    areaObjectAI();
    areaTextureRect(0, 0, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 1);
    areaRect(0, 0, 1500, 1000, [0, 255, 150, 1], false, false, 4, 1);
    drawArea(1500, 1000, 1);
    textureAnimation();
    openWorldCamera(1);
    stopAreaUser(1);
    drawPassiveRect(10, canvas.height - 70, playerHealth * 4, 30, [255, 0, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 70, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 35, stamina * 4, 30, [0, 255, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 35, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 105, magic * 4, 30, [0, 0, 255, 1]);
    drawPassiveRectOutline(10, canvas.height - 105, 400, 30, [0, 0, 0, 1]);
    drawText(155, canvas.height - 35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 105, 100, 30, "teleport", "../ludificioEngine/text/fonts/8-bit/black/");
    if (mouseOver(canvas.width / 2 - 400, canvas.height / 2 + 100, 800, 100)) {
        drawPassiveRect(canvas.width / 2 - 400, canvas.height / 2 + 100, 800, 100, [200, 50, 0, 1]);
    }
    drawText(canvas.width / 2 - 300, canvas.height / 2 - 100, 600, 100, "YOU WIN", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(canvas.width / 2 - 400, canvas.height / 2 + 100, 800, 100, "Next Level", "../ludificioEngine/text/fonts/8-bit/black/");

    if (onRectButton(canvas.width / 2 - 400, canvas.height / 2 + 100, 800, 100)) {
        areas[1] = false;
        areas[2] = true;
        globalPos[0] = false;
        globalPos[1] = true;
    }
}

function survivalArea2() {
    mapping = false;
    modifiedAreaControls(2);
    areaObjectAI();
    if (rectContact(0, 2, 2)) {
        tpRectSprite(5, 300, 100, 100, 2, findUser(2));
        areas[2] = false;
        areas[3] = true;
    }
    areaTextureRect(5, 300, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 2);
    areaTextureRect(2800, 1500, 100, 100, "../ludificioEngine/images/16-bit/portal1.png", true, false, 2, 2);
    areaRect(300, 5, 50, 100, [255, 0, 0, 1], true, false, 4, 2);
    areaRect(5, 5, 100, 100, [10, 150, 150, 1], true, false, 6, 2);
    areaTextureRect(1500, 500, 100, 100, "magnetUp.png", true, false, 8, 2);
    areaTextureRect(2000, 1000, 100, 100, "magnetUp.png", true, false, 10, 2);
    areaTextureRect(2000, 500, 100, 100, "magnetUp.png", true, false, 12, 2);
    areaTextureRect(1500, 1000, 100, 100, "magnetUp.png", true, false, 14, 2);
    areaTextureRect(2500, 2000, 100, 100, "magnetUp.png", true, false, 16, 2);
    areaTextureRect(2000, 2000, 100, 100, "magnetUp.png", true, false, 18, 2);
    areaTextureRect(2500, 1500, 100, 100, "magnetUp.png", true, false, 20, 2);
    areaRect(800, 300, 100, 100, [255, 150, 150, 1], true, false, 22, 2);
    areaRect(600, 800, 100, 100, [10, 255, 150, 1], true, false, 23, 2);
    areaRect(2000, 1500, 100, 100, [100, 255, 200, 1], true, false, 26, 2);
    areaRect(0, 0, 3000, 3000, [100, 200, 100, 1], false, false, 28, 2);
    drawArea(3000, 3000, 2);
    textureAnimation();
    openWorldCamera(2);
    stopAreaUser(2);
    drawPassiveRect(10, canvas.height - 70, playerHealth * 4, 30, [255, 0, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 70, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 35, stamina * 4, 30, [0, 255, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 35, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 105, magic * 4, 30, [0, 0, 255, 1]);
    drawPassiveRectOutline(10, canvas.height - 105, 400, 30, [0, 0, 0, 1]);
    drawText(155, canvas.height - 35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 105, 100, 30, "teleport", "../ludificioEngine/text/fonts/8-bit/black/");
    if (mapping) {
        map(canvas.width - 300, canvas.height - 300, 300, 300, 2);
        drawPassiveRectOutline(canvas.width - 300, canvas.height - 300, 300, 300, [0, 0, 0, 1]);
    }
}

function survivalWin2() {
    modifiedAreaControls(3);
    areaObjectAI();
    areaTextureRect(0, 0, 100, 100, "../ludificioEngine/images/playerModels/playerModel1/frontFacing.png", true, true, 0, 3);
    areaRect(0, 0, 1500, 1000, [0, 255, 150, 1], false, false, 4, 3);
    drawArea(1500, 1000, 3);
    textureAnimation();
    openWorldCamera(3);
    stopAreaUser(3);
    drawPassiveRect(10, canvas.height - 70, playerHealth * 4, 30, [255, 0, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 70, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 35, stamina * 4, 30, [0, 255, 0, 1]);
    drawPassiveRectOutline(10, canvas.height - 35, 400, 30, [0, 0, 0, 1]);
    drawPassiveRect(10, canvas.height - 105, magic * 4, 30, [0, 0, 255, 1]);
    drawPassiveRectOutline(10, canvas.height - 105, 400, 30, [0, 0, 0, 1]);
    drawText(155, canvas.height - 35, 100, 30, "stamina", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 70, 100, 30, "health", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(155, canvas.height - 105, 100, 30, "teleport", "../ludificioEngine/text/fonts/8-bit/black/");
    if (mouseOver(canvas.width / 2 - 300, canvas.height / 2 - 200, 600, 100)) {
        drawPassiveRect(canvas.width / 2 - 300, canvas.height / 2 - 200, 600, 100, [200, 50, 0, 1]);
    }
    drawText(canvas.width / 2 - 300, canvas.height / 2, 600, 100, "YOU WIN", "../ludificioEngine/text/fonts/8-bit/black/");
    drawText(canvas.width / 2 - 300, canvas.height / 2 - 200, 600, 100, "Main Menu", "../ludificioEngine/text/fonts/8-bit/black/");
    if (onRectButton(canvas.width / 2 - 300, canvas.height / 2 - 200, 600, 100)) {
        lost = false;
        areas[1] = true;
        areas[2] = false;
        globalPos[0] = true;
        globalPos[1] = false;
        introduction = true;
        startSurvival = false;
        survival = false;
        isLeftMouseDown = false;
    }
}