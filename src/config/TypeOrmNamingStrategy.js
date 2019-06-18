var DefaultNamingStrategy = require('typeorm').DefaultNamingStrategy
var snakeCase = require('typeorm/util/StringUtils').snakeCase
var pluralize = require('pluralize')

module.exports = class TypeOrmNamingStrategy extends DefaultNamingStrategy {
  tableName(className, customName) {
    return customName || pluralize(snakeCase(className))
  }

  columnName(propertyName, customName, embeddedPrefixes) {
    return snakeCase(embeddedPrefixes.join('_')) + (customName || snakeCase(propertyName))
  }

  relationName(propertyName) {
    return snakeCase(propertyName)
  }

  joinColumnName(relationName, referencedColumnName) {
    return snakeCase(pluralize.singular(relationName) + '_' + referencedColumnName)
  }

  joinTableName(firstTableName, secondTableName) {
    return snakeCase(firstTableName + '_' + secondTableName)
  }

  joinTableColumnName(tableName, propertyName, columnName) {
    return snakeCase(pluralize.singular(tableName) + '_' + (columnName || propertyName))
  }

  classTableInheritanceParentColumnName(parentTableName, parentTableIdPropertyName) {
    return snakeCase(pluralize.singular(parentTableName) + '_' + parentTableIdPropertyName)
  }
}
