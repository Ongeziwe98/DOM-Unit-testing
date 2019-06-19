describe('calculate-bill function' , function(){
    it('should return R2.75 when call is entered in the text box. ' , function(){
       var closure = calculateBtnClicked();
        assert.equal(closure.billsMade("call"), "2.75");
    });

    it('should return R0.75 when sms is entered in the text box. ' , function(){
        var closure = calculateBtnClicked();
         assert.equal(closure.billsMade("sms"), "0.75");
     });

     it('should return 0 when the string entered is invalid. ' , function(){
        var closure = calculateBtnClicked();
         assert.equal(closure.billsMade('data,airtime'), "0.00");
     });

     it('should return R2.75 when the string entered has invalid inputs. ' , function(){
        var closure = calculateBtnClicked();
         assert.equal(closure.billsMade('call,data,airtime'), 2.75);
     });
     
     it('should return orange when the string entered is equal or greater than 20 . ' , function(){
        var closure = calculateBtnClicked();
       
         assert.equal(closure.billsMade('call,call,call,call,call,call,call,sms'), '20.00');
     });
     it('should return red when the string entered is equal or greater than 30 . ' , function(){
        var closure = calculateBtnClicked();
         assert.equal(closure.billsMade('call,call,call,call,call,call,call,call,call,call,call,call,call,sms,sms'), '37.25');
     });
});