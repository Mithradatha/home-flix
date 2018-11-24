import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Flix')
export class Flix {
  @JsonProperty('_id', String)
  id: string = undefined;

  @JsonProperty('provider', String)
  provider: string = undefined;

  @JsonProperty('name', String)
  name: string = undefined;

  @JsonProperty('type', String)
  type: string = undefined;

  @JsonProperty('todo', Boolean)
  todo = false;
}
