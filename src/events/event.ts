import * as api from "../connectivity/events";

/**
 * Provides information for events received from Stream Deck.
 */
export class Event<T extends api.EventMessage> {
	/**
	 * Event that occurred.
	 */
	public readonly type: T["event"];

	/**
	 * Initializes a new instance of the {@link Event} class.
	 * @param source Source of the event, i.e. the original message from Stream Deck.
	 */
	constructor(source: T) {
		this.type = source.event;
	}
}
