var chai = require("chai");
chai.should();
var e = require('../eventify.js');
describe('Eventify', function(){
	var obj = {};
	e.Eventify(obj);
  it('should define on', function(){
    obj.on.should.be.a('function');
  });
  it('should define trigger', function(){
    obj.trigger.should.be.a('function');
  });
  it('should define off', function(){
    obj.off.should.be.a('function');
  });
  it('should define bind', function(){
    obj.bind.should.be.a('function');
  });
  it('should define unbind', function(){
    obj.unbind.should.be.a('function');
  });
  it('should define unbindAll', function(){
    obj.unbindAll.should.be.a('function');
  });
  it('should define one', function(){
    obj.one.should.be.a('function');
  });

  it('should trigger an event', function(){
    var call = false;
    obj.on('test', function(){
      call = true;
    });
    call.should.equal(false);

    obj.trigger('test');
    call.should.equal(true);
    obj.off('test');
  });

  it('should send arguments along', function(){
    var arg = 1;
    obj.on('test',function(a){
      a.should.equal(arg);
    })
    obj.trigger('test',arg);
    obj.off('test');
  });

  it('should send arguments along', function(){
    var arg1 = 1, arg2 = 2;
    obj.on('test', function(a,b){
      a.should.equal(arg1);
      b.should.equal(arg2);
    })
    obj.trigger('test',[arg1,arg2]);
    obj.off('test');
  });

  it('should only call one once', function(){
    var cnt = 0;
    obj.one('test',function() {
      cnt++;
    });
    obj.trigger('test');
    obj.trigger('test');
    cnt.should.equal(1);
    obj.off('test');
  });

  it('should only call on once', function(){
    var cnt = 0;
    obj.on('test',function() {
      cnt++;
    });
    obj.trigger('test');
    obj.trigger('test');
    cnt.should.equal(2);
    obj.off('test');
  });

  it('should be able to off', function(){
    var cnt = 0;
    obj.on('test',function() {
      cnt++;
    });
    obj.trigger('test');
    obj.off('test');
    obj.trigger('test');
    cnt.should.equal(1);
  });
})