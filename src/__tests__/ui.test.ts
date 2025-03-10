import { getConnection } from "../../tests/__mocks__/connection";
import { Action } from "../actions/action";
import * as mockEvents from "../connectivity/__mocks__/events";
import { PropertyInspectorDidAppearEvent, PropertyInspectorDidDisappearEvent, SendToPluginEvent } from "../events";
import { UIClient } from "../ui";

describe("UIClient", () => {
	/**
	 * Asserts {@link UIClient.onPropertyInspectorDidAppear} invokes the listener when the connection emits the `propertyInspectorDidAppear` event.
	 */
	it("Receives onPropertyInspectorDidAppear", () => {
		// Arrange.
		const { connection, emitMessage } = getConnection();
		const client = new UIClient(connection);

		const listener = jest.fn();
		const emit = () => emitMessage(mockEvents.propertyInspectorDidAppear);

		// Act.
		const result = client.onPropertyInspectorDidAppear(listener);
		const { action, context, device } = emit();

		// Assert.
		expect(listener).toHaveBeenCalledTimes(1);
		expect(listener).toHaveBeenCalledWith<[PropertyInspectorDidAppearEvent<never>]>({
			action: new Action(connection, { action, context }),
			deviceId: device,
			type: "propertyInspectorDidAppear"
		});

		// Act (dispose).
		result.dispose();
		emit();

		// Assert (dispose).
		expect(listener).toHaveBeenCalledTimes(1);
	});

	/**
	 * Asserts {@link UIClient.onPropertyInspectorDidDisappear} invokes the listener when the connection emits the `propertyInspectorDidDisappear` event.
	 */
	it("Receives onPropertyInspectorDidDisappear", () => {
		// Arrange.
		const { connection, emitMessage } = getConnection();
		const client = new UIClient(connection);

		const listener = jest.fn();
		const emit = () => emitMessage(mockEvents.propertyInspectorDidDisappear);

		// Act.
		const result = client.onPropertyInspectorDidDisappear(listener);
		const { action, context, device } = emit();

		// Assert.
		expect(listener).toHaveBeenCalledTimes(1);
		expect(listener).toHaveBeenCalledWith<[PropertyInspectorDidDisappearEvent<never>]>({
			action: new Action(connection, { action, context }),
			deviceId: device,
			type: "propertyInspectorDidDisappear"
		});

		// Act (dispose).
		result.dispose();
		emit();

		// Assert (dispose).
		expect(listener).toHaveBeenCalledTimes(1);
	});

	/**
	 * Asserts {@link UIClient.onSendToPlugin} invokes the listener when the connection emits the `sendToPlugin` event.
	 */
	it("Receives onSendToPlugin", () => {
		// Arrange.
		const { connection, emitMessage } = getConnection();
		const client = new UIClient(connection);

		const listener = jest.fn();
		const emit = () => emitMessage(mockEvents.sendToPlugin);

		// Act.
		const result = client.onSendToPlugin(listener);
		const { action, context, payload } = emit();

		// Assert.
		expect(listener).toHaveBeenCalledTimes(1);
		expect(listener).toHaveBeenCalledWith<[SendToPluginEvent<mockEvents.Settings, never>]>({
			action: new Action(connection, { action, context }),
			payload,
			type: "sendToPlugin"
		});

		// Act (dispose).
		result.dispose();
		emit();

		// Assert (dispose).
		expect(listener).toHaveBeenCalledTimes(1);
	});
});
