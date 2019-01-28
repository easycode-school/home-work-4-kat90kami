import { Component } from '@angular/core';

@Component({
	selector: 'app-car',
	templateUrl: './car.component.html',
	styleUrls: ['./car.component.css']
})
export class CarComponent {
	public car = {
		name: 'Tesla',
		mileage: 100,
		tank: 30,
		gas: 30,
		specifications: ['Двигатель 2 литра', 'максимальная скорость 200 км/ч']
	};

	public visible = false;
	/**
	 * метод drive увеличиват пробег машины и уменьшат бензин в баке + активирует кнопку Refuel если бензин подходит к нулю (< 10)
	 */
	drive() {
		this.car.mileage += 10;
		this.car.gas--;
		if (this.car.gas <= 10) {
			this.visible = true;
		}
		console.log(this.car)
	}
	/**
	 * метод refuel обновляет значение бензина в баке
	 */
	refuel() {
		this.car.gas = 30;
		this.visible = false;
	}
}  	