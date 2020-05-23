const cal = require('./calculator'); //Arrange

describe('add operation', () => {
  test('adds 1 + 2 to equal 3', () => {
    var value = cal.add(1, 2); //Act
    expect(value).toBe(3); //Assert
  });

  test('adds 5 + 5 to equal 10', () => {
    var value = cal.add(5, 5); //Act
    expect(value).toBe(10); //Assert
  });
});

describe('subtract operation', () => {
  test('subtracts 5 - 5 to equal 0', () => {
    var value = cal.subtract(5, 5); //Act
    expect(value).toBe(0); //Assert
  });

  test('subtracts 3 - 2 to equal 1', () => {
    var value = cal.subtract(3, 2); //Act
    expect(value).toBe(1); //Assert
  });
});