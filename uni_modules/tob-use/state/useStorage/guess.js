export function guessSerializerType(rawInit) {
  return rawInit == null
    ? 'any'
    : rawInit instanceof Set
    ? 'set'
    : rawInit instanceof Map
    ? 'map'
    : rawInit instanceof Date
    ? 'date'
    : typeof rawInit === 'boolean'
    ? 'boolean'
    : typeof rawInit === 'string'
    ? 'string'
    : typeof rawInit === 'object'
    ? 'object'
    : Array.isArray(rawInit)
    ? 'object'
    : !Number.isNaN(rawInit)
    ? 'number'
    : 'any'
}
